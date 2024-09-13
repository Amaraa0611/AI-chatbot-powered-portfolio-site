# AI-Enhanced Portfolio Website

This project combines a personal portfolio website with an integrated AI chatbot, showcasing both web development skills and AI integration capabilities, built for myself looking for job opportunity in Japan, Toyko.

## Table of Contents
1. [Portfolio Site](#portfolio-site)
2. [AI Chatbot](#ai-chatbot)
3. [Integration and Deployment](#integration-and-deployment)
4. [Installation and Setup](#installation-and-setup)

## Portfolio Site
<img width="1420" alt="Screen Shot 2024-09-13 at 6 57 26 PM" src="https://github.com/user-attachments/assets/867ebf18-3c58-48f7-855a-2426be1f4840">


The portfolio site is built using modern web technologies to create a responsive and interactive user experience.

### Technologies Used:
- Next.js
- React
- TypeScript
- Tailwind CSS

### Features:
- Responsive design
- Dynamic project showcases
- Interactive UI elements

## AI Chatbot

The AI chatbot is integrated into the portfolio site to provide an interactive experience for visitors.

### Technologies Used:
- Dify.ai for chatbot functionality
- Custom styling for chatbot integration

### Features:
- Natural language processing
- Customized responses based on portfolio content
- Seamless integration with the portfolio design

## Integration and Deployment

The project combines the portfolio site and AI chatbot into a cohesive web application, deployed for public access.

### Technologies Used:
- Vercel for hosting and deployment
- GitHub for version control
- Next.js API routes for backend functionality (if applicable)

### Features:
- Continuous deployment from GitHub repository
- Optimized performance with Vercel's edge network
- Environment variable management for secure API key storage

## Installation and Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_DIFY_CHATBOT_TOKEN=your_dify_chatbot_token
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Prerequisites:
- Node.js (v14 or later)
- npm (v6 or later)

### Deploying to Vercel:
1. Push your code to a GitHub repository.
2. Connect your GitHub account to Vercel.
3. Import the project from your GitHub repository.
4. Configure environment variables in the Vercel dashboard.
5. Deploy the project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
