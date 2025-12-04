// // D:\mktgroup\app\api\enquiry\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer, { Transporter } from "nodemailer";

// interface SendMailOptions {
//   to: string | string[];
//   name: string;
//   subject: string;
//   body: string;
// }

// interface SendMailResult {
//   success: boolean;
//   error?: string;
// }

// async function sendMail({
//   to,
//   name,
//   subject,
//   body,
// }: SendMailOptions): Promise<SendMailResult> {
//   const transporter: Transporter = nodemailer.createTransport({
//     // FIXED: createTransporter -> createTransport
//     host: "lax028.hawkhost.com",
//     port: 587,
//     auth: {
//       user: "info@demo-web.live",
//       pass: "=D,g8ojJ~H!T",
//     },
//   });

//   try {
//     // Verify transporter connection
//     await transporter.verify();
//   } catch (error) {
//     console.error("Transporter verification error:", error);
//     return { success: false, error: "Transporter verification failed" };
//   }

//   try {
//     // Send email
//     const sendResult = await transporter.sendMail({
//       from: `"${name}" <info@demo-web.live>`,
//       to,
//       subject,
//       html: body,
//     });
//     console.log("Email sent successfully:", sendResult.messageId);
//     return { success: true };
//   } catch (error) {
//     console.error("Email send error:", error);
//     return { success: false, error: "Email sending failed" };
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const fullName = formData.get("fullName") as string;
//     const companyName = formData.get("companyName") as string;
//     const email = formData.get("email") as string;
//     const whatsapp = formData.get("whatsapp") as string;
//     const country = formData.get("country") as string;
//     const interestedProducts = formData.get("interestedProducts") as string;
//     const message = formData.get("message") as string;

//     // Basic validation
//     if (!fullName || !email) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // Prepare email body
//     const emailBody = `
//       <h2>New Enquiry Received</h2>
//       <p><strong>Full Name:</strong> ${fullName}</p>
//       <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
//       <p><strong>Email Address:</strong> ${email}</p>
//       <p><strong>WhatsApp Number:</strong> ${whatsapp || "N/A"}</p>
//       <p><strong>Country:</strong> ${country || "N/A"}</p>
//       <p><strong>Interested Products:</strong> ${
//         interestedProducts || "N/A"
//       }</p>
//       <p><strong>Message:</strong> ${message || "N/A"}</p>
//     `;

//     const result = await sendMail({
//       // to: "info@demo-web.live", // Or your recipient email
//       to: "asdfgh1211100000@gmail.com", // Or your recipient email
//       name: fullName,
//       subject: `New Enquiry from ${fullName}`,
//       body: emailBody,
//     });

//     if (result.success) {
//       return NextResponse.json({
//         success: true,
//         message: "Enquiry sent successfully!",
//       });
//     } else {
//       return NextResponse.json(
//         { success: false, error: result.error },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("API error:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// D:\mktgroup\app\api\enquiry\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer, { Transporter } from "nodemailer";

// // --- ADDED/USED: Interface for incoming JSON data ---
// interface EnquiryData {
//   fullName: string;
//   companyName?: string;
//   email: string;
//   whatsapp?: string;
//   country?: string;
//   interestedProducts?: string;
//   message?: string;
// }
// // -------------------------------------------------

// interface SendMailOptions {
//   to: string | string[];
//   name: string;
//   subject: string;
//   body: string;
// }

// interface SendMailResult {
//   success: boolean;
//   error?: string;
// }

// async function sendMail({
//   to,
//   name,
//   subject,
//   body,
// }: SendMailOptions): Promise<SendMailResult> {
//   const transporter: Transporter = nodemailer.createTransport({
//     host: "lax028.hawkhost.com",
//     port: 587,
//     auth: {
//       user: "info@demo-web.live",
//       pass: "=D,g8ojJ~H!T",
//     },
//   });

//   try {
//     await transporter.verify();
//   } catch (error) {
//     console.error("Transporter verification error:", error);
//     return { success: false, error: "Transporter verification failed" };
//   }

//   try {
//     const sendResult = await transporter.sendMail({
//       from: `"${name}" <info@demo-web.live>`,
//       to,
//       subject,
//       html: body,
//     });
//     console.log("Email sent successfully:", sendResult.messageId);
//     return { success: true };
//   } catch (error) {
//     console.error("Email send error:", error);
//     return { success: false, error: "Email sending failed" };
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     // --- MODIFIED: Read the JSON body using the interface ---
//     const data: EnquiryData = await request.json();

//     const fullName = data.fullName;
//     const companyName = data.companyName;
//     const email = data.email;
//     const whatsapp = data.whatsapp;
//     const country = data.country;
//     const interestedProducts = data.interestedProducts;
//     const message = data.message;
//     // -----------------------------------------------------

//     // Basic validation
//     if (!fullName || !email) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // Prepare email body
//     const emailBody = `
//       <h2>New Enquiry Received</h2>
//       <p><strong>Full Name:</strong> ${fullName}</p>
//       <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
//       <p><strong>Email Address:</strong> ${email}</p>
//       <p><strong>WhatsApp Number:</strong> ${whatsapp || "N/A"}</p>
//       <p><strong>Country:</strong> ${country || "N/A"}</p>
//       <p><strong>Interested Products:</strong> ${
//         interestedProducts || "N/A"
//       }</p>
//       <p><strong>Message:</strong> ${message || "N/A"}</p>
//     `;

//     const result = await sendMail({
//       to: "asdfgh1211100000@gmail.com", // Your recipient email
//       name: fullName,
//       subject: `New Enquiry from ${fullName}`,
//       body: emailBody,
//     });

//     if (result.success) {
//       return NextResponse.json({
//         success: true,
//         message: "Enquiry sent successfully!",
//       });
//     } else {
//       return NextResponse.json(
//         { success: false, error: result.error },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("API error:", error);
//     // This catches errors like invalid JSON format in the request body
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error or invalid request format",
//       },
//       { status: 500 }
//     );
//   }
// }

////////////////////alll///////////////////////////

// // D:\mktgroup\app\api\enquiry\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer, { Transporter } from "nodemailer";

// // Interface for incoming JSON data
// interface EnquiryData {
//   fullName: string;
//   companyName?: string;
//   email: string;
//   whatsapp?: string;
//   country?: string;
//   interestedProducts?: string;
//   message?: string;
// }

// // Nodemailer Helper Interfaces (no change)
// interface SendMailOptions {
//   to: string | string[];
//   name: string;
//   subject: string;
//   body: string;
// }

// interface SendMailResult {
//   success: boolean;
//   error?: string;
// }

// // Nodemailer Helper Function (no change)
// async function sendMail({
//   to,
//   name,
//   subject,
//   body,
// }: SendMailOptions): Promise<SendMailResult> {
//   const transporter: Transporter = nodemailer.createTransport({
//     host: "lax028.hawkhost.com",
//     port: 587,
//     auth: {
//       user: "info@demo-web.live",
//       pass: "=D,g8ojJ~H!T",
//     },
//   });

//   try {
//     await transporter.verify();
//   } catch (error) {
//     console.error("Transporter verification error:", error);
//     return { success: false, error: "Transporter verification failed" };
//   }

//   try {
//     const sendResult = await transporter.sendMail({
//       from: `"${name}" <info@demo-web.live>`,
//       to,
//       subject,
//       html: body,
//     });
//     console.log("Email sent successfully:", sendResult.messageId);
//     return { success: true };
//   } catch (error) {
//     console.error("Email send error:", error);
//     return { success: false, error: "Email sending failed" };
//   }
// }

// // --- Main Route Handler ---
// export async function POST(request: NextRequest) {
//   const EXTERNAL_API_URL =
//     "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitProductEnquiry";

//   try {
//     const data: EnquiryData = await request.json();

//     const fullName = data.fullName;
//     const companyName = data.companyName;
//     const email = data.email;
//     const whatsapp = data.whatsapp;
//     const country = data.country;
//     const interestedProducts = data.interestedProducts;
//     const message = data.message;

//     // Basic validation
//     if (!fullName || !email) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // --- 1. Prepare Data for External API (based on typical requirements) ---
//     // Assuming the external API expects the same JSON structure
//     const externalPayload = {
//       full_name: fullName, // Adjusted to snake_case if external API prefers it
//       company_name: companyName,
//       email_address: email,
//       whatsapp_number: whatsapp,
//       country: country,
//       product_name: interestedProducts, // Mapping to 'product_name' as seen in your image
//       message: message,
//     };

//     // 2. Prepare Email Body for your internal email (no change)
//     const emailBody = `
//       <h2>New Enquiry Received</h2>
//       <p><strong>Full Name:</strong> ${fullName}</p>
//       <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
//       <p><strong>Email Address:</strong> ${email}</p>
//       <p><strong>WhatsApp Number:</strong> ${whatsapp || "N/A"}</p>
//       <p><strong>Country:</strong> ${country || "N/A"}</p>
//       <p><strong>Interested Products:</strong> ${
//         interestedProducts || "N/A"
//       }</p>
//       <p><strong>Message:</strong> ${message || "N/A"}</p>
//     `;

//     // --- 3. Execute both requests concurrently (in parallel) ---
//     const [emailResult, externalApiResult] = await Promise.allSettled([
//       // Internal Nodemailer Request
//       sendMail({
//         to: "asdfgh1211100000@gmail.com", // Your recipient email
//         name: fullName,
//         subject: `New Enquiry from ${fullName}`,
//         body: emailBody,
//       }),
//       // External API Request
//       fetch(EXTERNAL_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(externalPayload),
//         // Set a timeout for the external request to prevent hanging
//       }).then((res) => res.json()), // Parse the response as JSON
//     ]);

//     // 4. Check Results and Respond
//     const emailSuccess =
//       emailResult.status === "fulfilled" && emailResult.value.success;
//     const externalApiSuccess =
//       externalApiResult.status === "fulfilled" &&
//       (externalApiResult.value?.success ||
//         externalApiResult.value?.status === "success");

//     // Decide the overall response success based on both results
//     if (emailSuccess && externalApiSuccess) {
//       return NextResponse.json({
//         success: true,
//         message: "Enquiry sent successfully to both destinations!",
//       });
//     }

//     // Partial or total failure
//     const errors = [];
//     if (!emailSuccess) {
//       errors.push(
//         `Email failed: ${
//           emailResult.status === "fulfilled"
//             ? emailResult.value.error
//             : "Network Error"
//         }`
//       );
//     }
//     if (!externalApiSuccess) {
//       errors.push(
//         `External API failed. Status: ${
//           externalApiResult.status
//         }, Response: ${JSON.stringify(
//           externalApiResult.status === "fulfilled"
//             ? externalApiResult.value
//             : "Request Failed"
//         )}`
//       );
//     }

//     console.error("Partial/Total Failure. Errors:", errors);

//     // Return success if at least one succeeded, but warn if one failed.
//     // For critical operations like this, we'll return an error if the most critical part (email) failed.
//     if (emailSuccess) {
//       return NextResponse.json(
//         {
//           success: true, // Frontend sees success, but we log the warning
//           message: `Enquiry sent to email, but external API failed: ${errors.join(
//             "; "
//           )}`,
//         },
//         { status: 200 }
//       );
//     } else {
//       // If email failed, return a 500 error
//       return NextResponse.json(
//         { success: false, error: errors.join("; ") },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("API error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error or invalid request format",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

// Interface for incoming JSON data
interface EnquiryData {
  fullName: string;
  companyName?: string;
  email: string;
  whatsapp?: string;
  country?: string;
  interestedProducts?: string;
  message?: string;
}

// Nodemailer Helper Interfaces
interface SendMailOptions {
  to: string | string[];
  name: string;
  subject: string;
  body: string;
}

interface SendMailResult {
  success: boolean;
  error?: string;
}

// Nodemailer Helper Function - UPDATED TO USE GMAIL SERVICE VIA ENV VARS
async function sendMail({
  to,
  name,
  subject,
  body,
}: SendMailOptions): Promise<SendMailResult> {
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASS = process.env.GMAIL_APP_PASS;

  if (!GMAIL_USER || !GMAIL_APP_PASS) {
    console.error("Missing Gmail credentials in environment variables.");
    return {
      success: false,
      error: "Server configuration error: Missing email credentials",
    };
  }

  const transporter: Transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail service
    auth: {
      user: GMAIL_USER, // Loaded from environment variable
      pass: GMAIL_APP_PASS, // Loaded from environment variable
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error("Transporter verification error:", error);
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    const sendResult = await transporter.sendMail({
      from: `"${name}" <${GMAIL_USER}>`, // Using GMAIL_USER as the sender address
      to,
      subject,
      html: body,
    });
    console.log("Email sent successfully:", sendResult.messageId);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Email sending failed" };
  }
}

// --- Main Route Handler ---
export async function POST(request: NextRequest) {
  const EXTERNAL_API_URL =
    "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitProductEnquiry";

  try {
    const data: EnquiryData = await request.json();

    const fullName = data.fullName;
    const companyName = data.companyName;
    const email = data.email;
    const whatsapp = data.whatsapp;
    const country = data.country;
    const interestedProducts = data.interestedProducts;
    const message = data.message; // Basic validation

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full Name and Email are required" },
        { status: 400 }
      );
    } // --- 1. Prepare Data for External API (based on typical requirements) --- // Assuming the external API expects the same JSON structure

    const externalPayload = {
      full_name: fullName, // Adjusted to snake_case if external API prefers it
      company_name: companyName,
      email_address: email,
      whatsapp_number: whatsapp,
      country: country,
      product_name: interestedProducts, // Mapping to 'product_name' as seen in your image
      message: message,
    }; // 2. Prepare Email Body for your internal email (no change)

    const emailBody = `
      <h2>New Enquiry Received</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>WhatsApp Number:</strong> ${whatsapp || "N/A"}</p>
      <p><strong>Country:</strong> ${country || "N/A"}</p>
      <p><strong>Interested Products:</strong> ${
      interestedProducts || "N/A"
    }</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `; // --- 3. Execute both requests concurrently (in parallel) ---

    const [emailResult, externalApiResult] = await Promise.allSettled([
      // Internal Nodemailer Request
      sendMail({
        to: "asdfgh1211100000@gmail.com", // Your recipient email
        name: fullName,
        subject: `New Enquiry from ${fullName}`,
        body: emailBody,
      }), // External API Request
      fetch(EXTERNAL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(externalPayload), // Set a timeout for the external request to prevent hanging
      }).then((res) => res.json()), // Parse the response as JSON
    ]); // 4. Check Results and Respond

    const emailSuccess =
      emailResult.status === "fulfilled" && emailResult.value.success;
    const externalApiSuccess =
      externalApiResult.status === "fulfilled" &&
      (externalApiResult.value?.success ||
        externalApiResult.value?.status === "success"); // Decide the overall response success based on both results

    if (emailSuccess && externalApiSuccess) {
      return NextResponse.json({
        success: true,
        message: "Enquiry sent successfully to both destinations!",
      });
    } // Partial or total failure

    const errors = [];
    if (!emailSuccess) {
      errors.push(
        `Email failed: ${
          emailResult.status === "fulfilled"
            ? emailResult.value.error
            : "Network Error"
        }`
      );
    }
    if (!externalApiSuccess) {
      errors.push(
        `External API failed. Status: ${
          externalApiResult.status
        }, Response: ${JSON.stringify(
          externalApiResult.status === "fulfilled"
            ? externalApiResult.value
            : "Request Failed"
        )}`
      );
    }

    console.error("Partial/Total Failure. Errors:", errors); // Return success if at least one succeeded, but warn if one failed. // For critical operations like this, we'll return an error if the most critical part (email) failed.

    if (emailSuccess) {
      return NextResponse.json(
        {
          success: true, // Frontend sees success, but we log the warning
          message: `Enquiry sent to email, but external API failed: ${errors.join(
            "; "
          )}`,
        },
        { status: 200 }
      );
    } else {
      // If email failed, return a 500 error
      return NextResponse.json(
        { success: false, error: errors.join("; ") },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error or invalid request format",
      },
      { status: 500 }
    );
  }
}
