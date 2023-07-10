import { Color } from 'three';
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Vignette shader
 * based on PaintEffect postprocess from ro.me
 * http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
 */

const VignetteShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"darkness":   { type: "f", value: 0.0 },
        "offset":   { type: "f", value: 0.0 },
		"color": { value: new Color(.8, .01, .02) }
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float darkness;",

        "uniform float offset;",
        
		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",
			// Eskil's vignette

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
			"gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );",
			
			// alternative version from glfx.js
			// this one makes more "dusty" look (as opposed to "burned")

			// "vec4 color = texture2D( tDiffuse, vUv );",
			// "float dist = distance( vUv, vec2( 0.5 ) );",
			// "color.rgb *= smoothstep( 0.8, offset * 0.799, dist *( darkness + offset ) );",
			// "gl_FragColor = color;",
			

		"}"

	].join("\n")

};

export { VignetteShader };

