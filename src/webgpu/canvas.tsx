// "use client";

// import { useEffect, useRef } from "react";

// interface WebGPUCanvasProps {
//   width?: number;
//   height?: number;
// }

// export default function WebGPUCanvas({
//   width = 640,
//   height = 480,
// }: WebGPUCanvasProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     async function initWebGPU() {
//       if (!canvasRef.current) return;

//       if (typeof navigator !== "undefined" && navigator.gpu) {
//         initWebGPU().catch(console.error);
//       } else {
//         console.log("WebGPU not supported in this browser.");
//       }

//       // Check for WebGPU support
//       if (!navigator.gpu) {
//         throw new Error("WebGPU not supported on this browser.");
//       }

//       // Request adapter
//       const adapter = await navigator.gpu.requestAdapter();
//       if (!adapter) {
//         throw new Error("No appropriate GPU adapter found.");
//       }

//       // Request device
//       const device = await adapter.requestDevice();

//       // Get canvas context
//       const context = canvasRef.current.getContext("webgpu");
//       if (!context) {
//         throw new Error("Failed to get WebGPU context");
//       }

//       // Configure the swap chain
//       const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
//       context.configure({
//         device,
//         format: canvasFormat,
//         alphaMode: "premultiplied",
//       });

//       // Create shader
//       const shaderCode = `
//         @vertex
//         fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4<f32> {
//           var pos = array<vec2<f32>, 3>(
//             vec2<f32>( 0.0,  0.5),
//             vec2<f32>(-0.5, -0.5),
//             vec2<f32>( 0.5, -0.5)
//           );
//           return vec4<f32>(pos[vertexIndex], 0.0, 1.0);
//         }

//         @fragment
//         fn fragmentMain() -> @location(0) vec4<f32> {
//           return vec4<f32>(1.0, 0.0, 0.0, 1.0);
//         }
//       `;

//       const shaderModule = device.createShaderModule({
//         code: shaderCode,
//       });

//       // Create pipeline
//       const pipeline = device.createRenderPipeline({
//         layout: "auto",
//         vertex: {
//           module: shaderModule,
//           entryPoint: "vertexMain",
//         },
//         fragment: {
//           module: shaderModule,
//           entryPoint: "fragmentMain",
//           targets: [
//             {
//               format: canvasFormat,
//             },
//           ],
//         },
//         primitive: {
//           topology: "triangle-list",
//         },
//       });

//       // Render loop
//       function render() {
//         const commandEncoder = device.createCommandEncoder();
//         const textureView = context.getCurrentTexture().createView();

//         const renderPass = commandEncoder.beginRenderPass({
//           colorAttachments: [
//             {
//               view: textureView,
//               clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
//               loadOp: "clear",
//               storeOp: "store",
//             },
//           ],
//         });

//         renderPass.setPipeline(pipeline);
//         renderPass.draw(3, 1, 0, 0);
//         renderPass.end();

//         device.queue.submit([commandEncoder.finish()]);
//         requestAnimationFrame(render);
//       }

//       render();
//     }

//     initWebGPU().catch(console.error);

//     // Cleanup function
//     return () => {
//       // Add any necessary cleanup here
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <canvas
//       ref={canvasRef}
//       width={width}
//       height={height}
//       className="rounded-lg border border-gray-200"
//     />
//   );
// }
