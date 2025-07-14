// src/components/DistortionImage.tsx
'use client';

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader, ShaderMaterial, Vector2 } from 'three';
import vertexShader from '@/shaders/vertex.glsl';
import fragmentShader from '@/shaders/fragment.glsl';

// Props para o nosso componente principal
type DistortionImageProps = {
  src: string;
  alt: string;
};

// Componente interno que renderiza o plano 3D com a imagem
function ImagePlane({ src }: { src: string }) {
  // Hook do R3F que nos dá informações sobre a cena, incluindo a viewport
  const { viewport } = useThree();
  
  // Carrega a textura da imagem a partir do caminho fornecido
  const texture = useLoader(TextureLoader, src);
  
  // Referência para o nosso material (o shader) para podermos atualizá-lo
  const shaderRef = useRef<ShaderMaterial>(null);
  
  // Estado para controlar o "nível" do hover (0 para parado, 1 para ativo)
  const [hoverState, setHoverState] = useState(0);

  // Hook que executa a cada frame (60 vezes por segundo)
  useFrame((state) => {
    if (shaderRef.current) {
      // Atualiza o uniform 'uTime' no shader com o tempo decorrido
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Anima suavemente o estado do hover para o shader
      shaderRef.current.uniforms.uHoverState.value += (hoverState - shaderRef.current.uniforms.uHoverState.value) * 0.05;
    }
  });

  // Função chamada quando o mouse se move sobre o objeto
  const handlePointerMove = (e: any) => {
    if (shaderRef.current) {
      // Atualiza o uniform 'uMouse' com as coordenadas do mouse (convertidas para 0-1)
      shaderRef.current.uniforms.uMouse.value.x = e.uv.x;
      shaderRef.current.uniforms.uMouse.value.y = 1.0 - e.uv.y; // O eixo Y é invertido
    }
  };

  return (
    <mesh
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHoverState(1)} // Ativa o efeito quando o mouse entra
      onPointerLeave={() => setHoverState(0)} // Desativa o efeito quando o mouse sai
    >
      {/* Define a geometria do plano para ter o tamanho exato da viewport do canvas */}
      <planeGeometry args={[viewport.width, viewport.height]} />

      {/* Aplica nosso material customizado com os shaders */}
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: texture },
          uMouse: { value: new Vector2(0.5, 0.5) },
          uHoverState: { value: 0 },
        }}
      />
    </mesh>
  );
}

// Componente principal que exportamos
export function DistortionImage({ src, alt }: DistortionImageProps) {
  return (
    <div className="h-full w-full" aria-label={alt}>
      <Canvas camera={{ fov: 45 }}>
        <ImagePlane src={src} />
      </Canvas>
    </div>
  );
}