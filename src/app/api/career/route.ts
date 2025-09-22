// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { firstName, lastName, email, phone, subject, message } = await req.json();
//     console.log("Career Form Data:", { firstName, lastName, email, phone, subject, message });

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//   from: process.env.GMAIL_USER,
//   to: process.env.GMAIL_USER, // send to your company inbox
//   replyTo: email, // so replies go to applicant
//   subject: `New Career Application: ${firstName} ${lastName}`,
//   html: `
//     <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
//       <table style="max-width: 800px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 20px;">
//         <tr>
//           <td style="text-align: center; padding-bottom: 20px;">
//             <h2 style="color: #333; margin: 0;">New Career Application</h2>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
//               <tr>
//                 <td style="font-weight: bold; color: #333; width: 120px;">Name:</td>
//                 <td style="color: #555;">${firstName} ${lastName}</td>
//               </tr>
//               <tr style="background-color: #f4f6f8;">
//                 <td style="font-weight: bold; color: #333;">Email:</td>
//                 <td style="color: #555;">${email}</td>
//               </tr>
//               <tr>
//                 <td style="font-weight: bold; color: #333;">Phone:</td>
//                 <td style="color: #555;">${phone}</td>
//               </tr>
//               <tr style="background-color: #f4f6f8;">
//                 <td style="font-weight: bold; color: #333;">Subject:</td>
//                 <td style="color: #555;">${subject}</td>
//               </tr>
//               <tr>
//                 <td style="font-weight: bold; color: #333; vertical-align: top;">Message:</td>
//                 <td style="color: #555;">${message}</td>
//               </tr>
//             </table>
//           </td>
//         </tr>
        
//       </table>
//     </div>
//   `,
// };


//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: "Email sent successfully" });
//   } catch (error: any) {
//     console.error("Error sending career email:", error);
//     return NextResponse.json(
//       { success: false, message: error.message || "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
