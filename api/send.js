export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Verify that the environment variable is present
  const apiKey = process.env.VITE_BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: 'API Key not configured on server' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: "Benser - Portfolio Website",
          email: "hello@benser.tech"
        },
        to: [{
          email: "bensavio2221@gmail.com",
          name: "Ben Savio"
        }],
        subject: `New Message from ${name}`,
        htmlContent: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #030303; color: #f8fafc; padding: 40px; border-radius: 20px;">
            <div style="max-width: 600px; margin: 0 auto;">
              <h1 style="color: #8b5cf6; font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 30px;">
                New Portfolio Lead
              </h1>
              
              <div style="background-color: #0a0a0a; padding: 30px; border-radius: 15px; border: 1px solid #1a1a1a;">
                <p style="margin: 0 0 10px 0; font-size: 10px; font-weight: bold; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">From</p>
                <p style="margin: 0 0 25px 0; font-size: 18px; font-weight: bold; color: #ffffff;">${name}</p>
                
                <p style="margin: 0 0 10px 0; font-size: 10px; font-weight: bold; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">Email Address</p>
                <p style="margin: 0 0 25px 0; font-size: 16px; color: #8b5cf6; text-decoration: none;">${email}</p>
                
                <p style="margin: 0 0 10px 0; font-size: 10px; font-weight: bold; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">Message Content</p>
                <div style="font-size: 16px; line-height: 1.6; color: #cbd5e1; background-color: #050505; padding: 20px; border-radius: 10px; border: 1px solid #111;">
                  ${message}
                </div>
              </div>
              
              <p style="margin-top: 30px; font-size: 12px; color: #475569; text-align: center;">
                Sent from your professional portfolio at benser.tech
              </p>
            </div>
          </div>
        `
      })
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully', result });
    } else {
      return res.status(response.status).json({ message: 'Brevo API error', error: result });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
