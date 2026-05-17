"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{6745:(e,t,n)=>{n.r(t),n.d(t,{HeroCanvas:()=>j});var a=n(5155),r=n(2115),o=n(3388),i=n(258),s=n(950),l=n(7548),u=n(5339);function c({all:e,scene:t,camera:n}){let a=(0,o.C)(({gl:e})=>e),i=(0,o.C)(({camera:e})=>e),s=(0,o.C)(({scene:e})=>e);return r.useLayoutEffect(()=>{let r=[];e&&(t||s).traverse(e=>{!1===e.visible&&(r.push(e),e.visible=!0)}),a.compile(t||s,n||i);let o=new l.WebGLCubeRenderTarget(128);new u.F1T(.01,1e5,o).update(a,t||s),o.dispose(),r.forEach(e=>e.visible=!1)},[]),null}let m=r.forwardRef(({children:e,enabled:t=!0,speed:n=1,rotationIntensity:a=1,floatIntensity:i=1,floatingRange:s=[-.1,.1],autoInvalidate:l=!1,...c},m)=>{let f=r.useRef(null);r.useImperativeHandle(m,()=>f.current,[]);let d=r.useRef(1e4*Math.random());return(0,o.D)(e=>{var r,o;if(!t||0===n)return;l&&e.invalidate();let c=d.current+e.clock.elapsedTime;f.current.rotation.x=Math.cos(c/4*n)/8*a,f.current.rotation.y=Math.sin(c/4*n)/8*a,f.current.rotation.z=Math.sin(c/4*n)/20*a;let m=Math.sin(c/4*n)/10;m=u.cj9.mapLinear(m,-.1,.1,null!=(r=null==s?void 0:s[0])?r:-.1,null!=(o=null==s?void 0:s[1])?o:.1),f.current.position.y=m*i,f.current.updateMatrix()}),r.createElement("group",c,r.createElement("group",{ref:f,matrixAutoUpdate:!1},e))});var f=n(8945);function d(e,t,n){let a=(0,o.C)(e=>e.size),i=(0,o.C)(e=>e.viewport),s="number"==typeof e?e:a.width*i.dpr,l="number"==typeof t?t:a.height*i.dpr,c=("number"==typeof e?n:e)||{},{samples:m=0,depth:f,...d}=c,p=null!=f?f:c.depthBuffer,h=r.useMemo(()=>{let e=new u.nWS(s,l,{minFilter:u.k6q,magFilter:u.k6q,type:u.ix0,...d});return p&&(e.depthTexture=new u.VCu(s,l,u.RQf)),e.samples=m,e},[]);return r.useLayoutEffect(()=>{h.setSize(s,l),m&&(h.samples=m)},[m,h,s,l]),r.useEffect(()=>()=>h.dispose(),[]),h}let p=function(e,t,n,a){var r;return(r=class extends u.BKk{constructor(a){for(let r in super({vertexShader:t,fragmentShader:n,...a}),e)this.uniforms[r]=new u.nc$(e[r]),Object.defineProperty(this,r,{get(){return this.uniforms[r].value},set(e){this.uniforms[r].value=e}});this.uniforms=u.LlO.clone(this.uniforms)}}).key=u.cj9.generateUUID(),r}({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class h extends u.uSd{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new u.Q1f("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},this.anisotropy>0&&(n.defines.USE_ANISOTROPY=""),t?n.defines.USE_SAMPLER="":n.defines.USE_TRANSMISSION="",n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let v=r.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:n=!1,side:a=u.hB5,transmission:i=1,thickness:s=0,backsideThickness:l=0,backsideEnvMapIntensity:c=1,samples:m=10,resolution:v,backsideResolution:x,background:g,anisotropy:y,anisotropicBlur:M,...S},b)=>{let C,j,w,T;(0,o.e)({MeshTransmissionMaterial:h});let z=r.useRef(null),[k]=r.useState(()=>new p),R=d(x||v),D=d(v);return(0,o.D)(e=>{if(z.current.time=e.clock.elapsedTime,z.current.buffer===D.texture&&!t){var r;(T=null==(r=z.current.__r3f.parent)?void 0:r.object)&&(w=e.gl.toneMapping,C=e.scene.background,j=z.current.envMapIntensity,e.gl.toneMapping=u.y_p,g&&(e.scene.background=g),T.material=k,n&&(e.gl.setRenderTarget(R),e.gl.render(e.scene,e.camera),T.material=z.current,T.material.buffer=R.texture,T.material.thickness=l,T.material.side=u.hsX,T.material.envMapIntensity=c),e.gl.setRenderTarget(D),e.gl.render(e.scene,e.camera),T.material=z.current,T.material.thickness=s,T.material.side=a,T.material.buffer=D.texture,T.material.envMapIntensity=j,e.scene.background=C,e.gl.setRenderTarget(null),e.gl.toneMapping=w)}}),r.useImperativeHandle(b,()=>z.current,[]),r.createElement("meshTransmissionMaterial",(0,f.A)({args:[m,t],ref:z},S,{buffer:e||D.texture,_transmission:i,anisotropicBlur:null!=M?M:y,transmission:t?i:0,thickness:s,side:a}))});function x(e){let{position:t,scale:n,speed:i,mouse:s}=e,l=(0,r.useRef)(null);return(0,o.D)(e=>{let{clock:n}=e;if(!l.current)return;let a=n.elapsedTime*i;l.current.rotation.x=.3*a,l.current.rotation.y=.5*a,l.current.position.x=t[0]+.3*s.normalizedX,l.current.position.y=t[1]+.2*s.normalizedY+.1*Math.sin(.7*a)}),(0,a.jsx)(m,{speed:1.5,rotationIntensity:.3,floatIntensity:.5,children:(0,a.jsxs)("mesh",{ref:l,position:t,scale:n,children:[(0,a.jsx)("icosahedronGeometry",{args:[1,3]}),(0,a.jsx)(v,{backside:!0,samples:8,thickness:.5,chromaticAberration:.08,anisotropy:.3,distortion:.2,distortionScale:.4,temporalDistortion:.1,color:"#4a9eff",attenuationColor:"#1a4a8a",attenuationDistance:.8,transmission:.95,roughness:.05,metalness:0})]})})}function g(e){let{position:t,mouse:n}=e,i=(0,r.useRef)(null);return(0,o.D)(e=>{let{clock:t}=e;if(!i.current)return;let a=t.elapsedTime;i.current.rotation.x=.2*a+.3*n.normalizedY,i.current.rotation.y=.15*a+.3*n.normalizedX,i.current.rotation.z=.1*a}),(0,a.jsxs)("mesh",{ref:i,position:t,children:[(0,a.jsx)("torusGeometry",{args:[1.4,.02,3,80]}),(0,a.jsx)("meshBasicMaterial",{color:"#4a9eff",transparent:!0,opacity:.25})]})}function y(e){let{position:t,radius:n,rotSpeed:i}=e,s=(0,r.useRef)(null);return(0,o.D)(e=>{let{clock:t}=e;s.current&&(s.current.rotation.z=t.elapsedTime*i,s.current.rotation.x=.4*Math.sin(.3*t.elapsedTime))}),(0,a.jsxs)("mesh",{ref:s,position:t,children:[(0,a.jsx)("torusGeometry",{args:[n,.004,2,120]}),(0,a.jsx)("meshBasicMaterial",{color:"#8cc8ff",transparent:!0,opacity:.12})]})}function M(e){let{mouse:t}=e;return(0,a.jsxs)("group",{children:[(0,a.jsx)(x,{position:[0,0,0],scale:1.2,speed:.4,mouse:t}),(0,a.jsx)(x,{position:[-3.5,1.5,-2],scale:.5,speed:.6,mouse:t}),(0,a.jsx)(x,{position:[3.5,-1,-3],scale:.35,speed:.8,mouse:t}),(0,a.jsx)(g,{position:[0,0,0],mouse:t}),(0,a.jsx)(y,{position:[0,0,0],radius:2.5,rotSpeed:.08}),(0,a.jsx)(y,{position:[0,0,0],radius:3.5,rotSpeed:-.05}),(0,a.jsx)(y,{position:[-2,1,-1],radius:1.2,rotSpeed:.15})]})}function S(e){let{count:t=2e3,mouse:n}=e,i=(0,r.useRef)(null),{positions:s,sizes:l,phases:c}=(0,r.useMemo)(()=>{let e=new Float32Array(3*t),n=new Float32Array(t),a=new Float32Array(t);for(let r=0;r<t;r++)e[3*r]=(Math.random()-.5)*20,e[3*r+1]=(Math.random()-.5)*8,e[3*r+2]=(Math.random()-.5)*20,n[r]=1.5*Math.random()+.5,a[r]=Math.random()*Math.PI*2;return{positions:e,sizes:n,phases:a}},[t]),m=(0,r.useMemo)(()=>({uTime:{value:0},uMouseX:{value:0},uMouseY:{value:0}}),[]);return(0,o.D)(e=>{let{clock:t}=e;m.uTime.value=t.elapsedTime,m.uMouseX.value+=(n.normalizedX-m.uMouseX.value)*.05,m.uMouseY.value+=(n.normalizedY-m.uMouseY.value)*.05}),(0,a.jsxs)("points",{ref:i,children:[(0,a.jsxs)("bufferGeometry",{children:[(0,a.jsx)("bufferAttribute",{attach:"attributes-position",args:[s,3]}),(0,a.jsx)("bufferAttribute",{attach:"attributes-aSize",args:[l,1]}),(0,a.jsx)("bufferAttribute",{attach:"attributes-aPhase",args:[c,1]})]}),(0,a.jsx)("shaderMaterial",{vertexShader:"\n  uniform float uTime;\n  uniform float uMouseX;\n  uniform float uMouseY;\n  attribute float aSize;\n  attribute float aPhase;\n  varying float vOpacity;\n\n  void main() {\n    vec3 pos = position;\n\n    float wave = sin(pos.x * 0.5 + uTime * 0.3 + aPhase) * 0.15;\n    wave += cos(pos.z * 0.4 + uTime * 0.2 + aPhase * 1.3) * 0.1;\n    pos.y += wave;\n\n    float dx = pos.x - uMouseX * 3.0;\n    float dz = pos.z - uMouseY * 3.0;\n    float dist = sqrt(dx * dx + dz * dz);\n    float repel = smoothstep(2.0, 0.0, dist) * 0.4;\n    pos.y += repel;\n\n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_PointSize = aSize * (300.0 / -mvPosition.z);\n    gl_Position = projectionMatrix * mvPosition;\n\n    vOpacity = 0.3 + sin(uTime * 0.5 + aPhase) * 0.15;\n  }\n",fragmentShader:"\n  varying float vOpacity;\n\n  void main() {\n    vec2 uv = gl_PointCoord - 0.5;\n    float d = length(uv);\n    if (d > 0.5) discard;\n    float alpha = (1.0 - d * 2.0) * vOpacity;\n    gl_FragColor = vec4(0.6, 0.78, 1.0, alpha);\n  }\n",uniforms:m,transparent:!0,depthWrite:!1,blending:u.EZo})]})}function b(e){let{mouse:t}=e;return(0,o.D)(e=>{let{camera:n}=e;n.position.x+=(1.5*t.normalizedX-n.position.x)*.04,n.position.y+=(.8*t.normalizedY-n.position.y)*.04,n.lookAt(0,0,0)}),null}function C(){let e=(0,r.useRef)(null);return(0,o.D)(t=>{let{clock:n}=t;e.current&&(e.current.material.opacity=.04+.02*Math.sin(.3*n.elapsedTime))}),(0,a.jsxs)("mesh",{ref:e,scale:[30,30,30],children:[(0,a.jsx)("sphereGeometry",{args:[1,8,8]}),(0,a.jsx)("meshBasicMaterial",{color:"#0d2040",side:u.hsX,transparent:!0,opacity:.06})]})}function j(e){let{mouse:t}=e;return(0,a.jsx)(i.Hl,{camera:{position:[0,0,7],fov:50},dpr:[1,1.5],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:u.FV,toneMappingExposure:1.2},style:{background:"transparent"},children:(0,a.jsxs)(r.Suspense,{fallback:null,children:[(0,a.jsx)(b,{mouse:t}),(0,a.jsx)("ambientLight",{intensity:.15}),(0,a.jsx)("pointLight",{position:[5,5,5],intensity:2,color:"#4a9eff",distance:20,decay:2}),(0,a.jsx)("pointLight",{position:[-5,-3,-3],intensity:1,color:"#1a3a6a",distance:15,decay:2}),(0,a.jsx)("spotLight",{position:[0,8,4],angle:.5,penumbra:1,intensity:3,color:"#60b4ff",castShadow:!1}),(0,a.jsx)(M,{mouse:t}),(0,a.jsx)(S,{count:1500,mouse:t}),(0,a.jsx)(C,{}),(0,a.jsx)(s.OH,{preset:"night"}),(0,a.jsx)(c,{all:!0})]})})}}}]);