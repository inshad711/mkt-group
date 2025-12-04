// // D:\mktgroup\app\api\contact\route.ts

// import { NextRequest, NextResponse } from "next/server";

// // Interface for incoming JSON data, matching the external API's expected snake_case keys
// interface ContactEnquiryData {
//   full_name: string;
//   company_name?: string;
//   email_address: string;
//   whatsapp_number?: string;
//   country?: string;
//   message?: string;
// }

// export async function POST(request: NextRequest) {
//   const EXTERNAL_API_URL =
//     "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitContactEnquiry";

//   try {
//     // Read the JSON body
//     const data: ContactEnquiryData = await request.json();

//     // Basic validation
//     if (!data.full_name || !data.email_address) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // --- Proxy Request to External API ---
//     const proxyResponse = await fetch(EXTERNAL_API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data), // Forward the parsed data directly
//     });

//     // Read the response from the external API
//     const proxyResult = await proxyResponse.json();

//     // Check if the external API reported success (assuming it returns success: true or a similar status)
//     if (
//       proxyResponse.ok &&
//       (proxyResult.success || proxyResult.status === "success")
//     ) {
//       console.log("Contact Enquiry successfully submitted to external API.");
//       return NextResponse.json({
//         success: true,
//         message: "Contact Enquiry sent successfully!",
//       });
//     } else {
//       console.error("External API submission failed:", proxyResult);
//       // Return the error from the external API
//       return NextResponse.json(
//         {
//           success: false,
//           error:
//             proxyResult.message ||
//             proxyResult.error ||
//             "External API submission failed.",
//         },
//         { status: proxyResponse.status }
//       );
//     }
//   } catch (error) {
//     console.error("API error or JSON parsing failed:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error or invalid request format",
//       },
//       { status: 500 }
//     );
//   }
// }

// //////////////// all /////////////////////
// // D:\mktgroup\app\api\contact\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer, { Transporter } from "nodemailer";

// // --- 1. Interfaces for Clarity ---

// // Interface for incoming JSON data (matching external API's snake_case keys)
// interface ContactEnquiryData {
//   full_name: string;
//   company_name?: string;
//   email_address: string;
//   whatsapp_number?: string;
//   country?: string;
//   message?: string;
// }

// // Nodemailer Helper Interfaces
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

// // --- 2. Nodemailer Helper Function (Copied from Enquiry Route) ---
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
//     console.log("Contact Email sent successfully:", sendResult.messageId);
//     return { success: true };
//   } catch (error) {
//     console.error("Contact Email send error:", error);
//     return { success: false, error: "Email sending failed" };
//   }
// }

// // --- 3. Main Route Handler ---
// export async function POST(request: NextRequest) {
//   const EXTERNAL_API_URL =
//     "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitContactEnquiry";

//   try {
//     // Read the incoming JSON data
//     const data: ContactEnquiryData = await request.json();

//     // Basic validation
//     if (!data.full_name || !data.email_address) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // --- Prepare Email Body ---
//     const emailBody = `
//             <h2>New Contact Enquiry Received</h2>
//             <p><strong>Full Name:</strong> ${data.full_name}</p>
//             <p><strong>Company Name:</strong> ${data.company_name || "N/A"}</p>
//             <p><strong>Email Address:</strong> ${data.email_address}</p>
//             <p><strong>WhatsApp Number:</strong> ${
//               data.whatsapp_number || "N/A"
//             }</p>
//             <p><strong>Country:</strong> ${data.country || "N/A"}</p>
//             <p><strong>Message:</strong> ${data.message || "N/A"}</p>
//         `;

//     // --- Execute both requests concurrently ---
//     const [emailResult, externalApiResult] = await Promise.allSettled([
//       // Internal Nodemailer Request
//       sendMail({
//         to: "asdfgh1211100000@gmail.com", // Your recipient email
//         name: data.full_name,
//         subject: `New Contact Enquiry from ${data.full_name}`,
//         body: emailBody,
//       }),
//       // External API Request
//       fetch(EXTERNAL_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data), // Send the data object as JSON
//       }).then((res) => res.json()), // Parse the response as JSON
//     ]);

//     // --- Check Results and Respond ---
//     const emailSuccess =
//       emailResult.status === "fulfilled" && emailResult.value.success;
//     // Assuming external API returns {success: true} or {status: 'success'}
//     const externalApiSuccess =
//       externalApiResult.status === "fulfilled" &&
//       (externalApiResult.value?.success ||
//         externalApiResult.value?.status === "success");

//     const errors = [];
//     if (!emailSuccess) {
//       errors.push(
//         `Email failed: ${
//           emailResult.status === "fulfilled"
//             ? emailResult.value.error
//             : "Request failed"
//         }`
//       );
//     }
//     if (!externalApiSuccess) {
//       errors.push(
//         `External API failed: ${JSON.stringify(
//           externalApiResult.status === "fulfilled"
//             ? externalApiResult.value
//             : "Request failed"
//         )}`
//       );
//     }

//     if (emailSuccess && externalApiSuccess) {
//       return NextResponse.json({
//         success: true,
//         message:
//           "Contact Enquiry sent successfully to email and external endpoint.",
//       });
//     }

//     // Handle partial or total failure
//     if (emailSuccess) {
//       return NextResponse.json(
//         {
//           success: true, // Returning success because the email (critical) succeeded
//           message: `Enquiry sent via email, but external API failed.`,
//           warning: errors.join("; "),
//         },
//         { status: 200 }
//       );
//     } else {
//       // If email failed, return a 500 error
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Critical failure: Email sending failed.",
//           details: errors.join("; "),
//         },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("API error or JSON parsing failed:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error or invalid request format",
//       },
//       { status: 500 }
//     );
//   }
// }

//////////////// all /////////////////////

// // D:\mktgroup\app\api\contact\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import nodemailer, { Transporter } from "nodemailer";

// // --- 1. Interfaces for Clarity ---

// // Interface for incoming JSON data (matching external API's snake_case keys)
// interface ContactEnquiryData {
//   full_name: string;
//   company_name?: string;
//   email_address: string;
//   whatsapp_number?: string;
//   country?: string;
//   message?: string;
// }

// // Nodemailer Helper Interfaces
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

// // --- 2. Nodemailer Helper Function (Copied from Enquiry Route) ---
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
//     console.log("Contact Email sent successfully:", sendResult.messageId);
//     return { success: true };
//   } catch (error) {
//     console.error("Contact Email send error:", error);
//     return { success: false, error: "Email sending failed" };
//   }
// }

// // --- 3. Main Route Handler ---
// export async function POST(request: NextRequest) {
//   const EXTERNAL_API_URL =
//     "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitContactEnquiry";

//   try {
//     // Read the incoming JSON data
//     const data: ContactEnquiryData = await request.json();

//     // Basic validation
//     if (!data.full_name || !data.email_address) {
//       return NextResponse.json(
//         { success: false, error: "Full Name and Email are required" },
//         { status: 400 }
//       );
//     }

//     // --- Prepare Email Body ---
//     const emailBody = `
//             <h2>New Contact Enquiry Received</h2>
//             <p><strong>Full Name:</strong> ${data.full_name}</p>
//             <p><strong>Company Name:</strong> ${data.company_name || "N/A"}</p>
//             <p><strong>Email Address:</strong> ${data.email_address}</p>
//             <p><strong>WhatsApp Number:</strong> ${
//               data.whatsapp_number || "N/A"
//             }</p>
//             <p><strong>Country:</strong> ${data.country || "N/A"}</p>
//             <p><strong>Message:</strong> ${data.message || "N/A"}</p>
//         `;

//     // --- Execute both requests concurrently ---
//     const [emailResult, externalApiResult] = await Promise.allSettled([
//       // Internal Nodemailer Request
//       sendMail({
//         to: "asdfgh1211100000@gmail.com", // Your recipient email
//         name: data.full_name,
//         subject: `New Contact Enquiry from ${data.full_name}`,
//         body: emailBody,
//       }),
//       // External API Request
//       fetch(EXTERNAL_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data), // Send the data object as JSON
//       }).then((res) => res.json()), // Parse the response as JSON
//     ]);

//     // --- Check Results and Respond ---
//     const emailSuccess =
//       emailResult.status === "fulfilled" && emailResult.value.success;
//     // Assuming external API returns {success: true} or {status: 'success'}
//     const externalApiSuccess =
//       externalApiResult.status === "fulfilled" &&
//       (externalApiResult.value?.success ||
//         externalApiResult.value?.status === "success");

//     const errors = [];
//     if (!emailSuccess) {
//       errors.push(
//         `Email failed: ${
//           emailResult.status === "fulfilled"
//             ? emailResult.value.error
//             : "Request failed"
//         }`
//       );
//     }
//     if (!externalApiSuccess) {
//       errors.push(
//         `External API failed: ${JSON.stringify(
//           externalApiResult.status === "fulfilled"
//             ? externalApiResult.value
//             : "Request failed"
//         )}`
//       );
//     }

//     if (emailSuccess && externalApiSuccess) {
//       return NextResponse.json({
//         success: true,
//         message:
//           "Contact Enquiry sent successfully to email and external endpoint.",
//       });
//     }

//     // Handle partial or total failure
//     if (emailSuccess) {
//       return NextResponse.json(
//         {
//           success: true, // Returning success because the email (critical) succeeded
//           message: `Enquiry sent via email, but external API failed.`,
//           warning: errors.join("; "),
//         },
//         { status: 200 }
//       );
//     } else {
//       // If email failed, return a 500 error
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Critical failure: Email sending failed.",
//           details: errors.join("; "),
//         },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("API error or JSON parsing failed:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error or invalid request format",
//       },
//       { status: 500 }
//     );
//   }
// }

////////// mail service method /////////////
// D:\mktgroup\app\api\contact\route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

// --- 1. Interfaces for Clarity ---

// Interface for incoming JSON data (matching external API's snake_case keys)
interface ContactEnquiryData {
  full_name: string;
  company_name?: string;
  email_address: string;
  whatsapp_number?: string;
  country?: string;
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

// --- 2. Nodemailer Helper Function (Copied from Enquiry Route) ---
// --- 2. Nodemailer Helper Function (Updated for Environment Variables) ---
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
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASS,
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
      from: `"${name}" <${GMAIL_USER}>`, // Use the environment variable for the 'from' address
      to,
      subject,
      html: body,
    });
    console.log("Contact Email sent successfully:", sendResult.messageId);
    return { success: true };
  } catch (error) {
    console.error("Contact Email send error:", error);
    return { success: false, error: "Email sending failed" };
  }
}

// --- 3. Main Route Handler ---
export async function POST(request: NextRequest) {
  const EXTERNAL_API_URL =
    "https://mktgroupaebck.demo-web.live/wp-json/custom-api/v1/submitContactEnquiry";

  try {
    // Read the incoming JSON data
    const data: ContactEnquiryData = await request.json();

    // Basic validation
    if (!data.full_name || !data.email_address) {
      return NextResponse.json(
        { success: false, error: "Full Name and Email are required" },
        { status: 400 }
      );
    }

    // --- Prepare Email Body ---
    const emailBody = `
            <h2>New Contact Enquiry Received</h2>
            <p><strong>Full Name:</strong> ${data.full_name}</p>
            <p><strong>Company Name:</strong> ${data.company_name || "N/A"}</p>
            <p><strong>Email Address:</strong> ${data.email_address}</p>
            <p><strong>WhatsApp Number:</strong> ${
              data.whatsapp_number || "N/A"
            }</p>
            <p><strong>Country:</strong> ${data.country || "N/A"}</p>
            <p><strong>Message:</strong> ${data.message || "N/A"}</p>
        `;

    // --- Execute both requests concurrently ---
    const [emailResult, externalApiResult] = await Promise.allSettled([
      // Internal Nodemailer Request
      sendMail({
        to: "asdfgh1211100000@gmail.com", // Your recipient email
        name: data.full_name,
        subject: `New Contact Enquiry from ${data.full_name}`,
        body: emailBody,
      }),
      // External API Request
      fetch(EXTERNAL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the data object as JSON
      }).then((res) => res.json()), // Parse the response as JSON
    ]);

    // --- Check Results and Respond ---
    const emailSuccess =
      emailResult.status === "fulfilled" && emailResult.value.success;
    // Assuming external API returns {success: true} or {status: 'success'}
    const externalApiSuccess =
      externalApiResult.status === "fulfilled" &&
      (externalApiResult.value?.success ||
        externalApiResult.value?.status === "success");

    const errors = [];
    if (!emailSuccess) {
      errors.push(
        `Email failed: ${
          emailResult.status === "fulfilled"
            ? emailResult.value.error
            : "Request failed"
        }`
      );
    }
    if (!externalApiSuccess) {
      errors.push(
        `External API failed: ${JSON.stringify(
          externalApiResult.status === "fulfilled"
            ? externalApiResult.value
            : "Request failed"
        )}`
      );
    }

    if (emailSuccess && externalApiSuccess) {
      return NextResponse.json({
        success: true,
        message:
          "Contact Enquiry sent successfully to email and external endpoint.",
      });
    }

    // Handle partial or total failure
    if (emailSuccess) {
      return NextResponse.json(
        {
          success: true, // Returning success because the email (critical) succeeded
          message: `Enquiry sent via email, but external API failed.`,
          warning: errors.join("; "),
        },
        { status: 200 }
      );
    } else {
      // If email failed, return a 500 error
      return NextResponse.json(
        {
          success: false,
          error: "Critical failure: Email sending failed.",
          details: errors.join("; "),
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API error or JSON parsing failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error or invalid request format",
      },
      { status: 500 }
    );
  }
}
