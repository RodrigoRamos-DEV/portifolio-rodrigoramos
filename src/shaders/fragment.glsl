// src/shaders/fragment.glsl
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHoverState;

void main() {
  // Calcula a distância do pixel atual até o mouse
  float dist = distance(vUv, uMouse);

  // Cria uma ondulação baseada no tempo e na distância do mouse
  float wave = sin(dist * 10.0 - uTime * 2.0) * 0.05;

  // Coordenadas de textura distorcidas pela ondulação
  vec2 distortedUv = vUv + wave * uHoverState;

  // Pega a cor da textura usando as coordenadas distorcidas
  vec4 textureColor = texture2D(uTexture, distortedUv);

  gl_FragColor = textureColor;
}