import { NextResponse } from "next/server";

const posts = [
  {
    title: "Mastering JavaScript: Essential Tips for Beginners",
    content:
      "Are you new to the world of JavaScript? Don't worry, we've got you covered! In this comprehensive guide, we'll walk you through the fundamentals of JavaScript and provide you with essential tips to help you become a proficient JavaScript developer. From variables and data types to control structures and functions, we'll explore it all. Get ready to embark on an exciting journey of learning and mastering JavaScript!",
    slug: "mastering-javascript-essential-tips-for-beginners",
    date: "2023-05-06",
  },
  {
    title: "Building Dynamic Web Applications with JavaScript and Node.js",
    content:
      "Are you looking to build powerful and interactive web applications? JavaScript and Node.js are the perfect tools for the job! In this tutorial series, we'll guide you through the process of creating dynamic web applications using JavaScript on both the client and server sides. From handling HTTP requests and managing databases to implementing real-time communication, you'll gain the skills to build scalable and efficient web applications. Join us on this coding adventure!",
    slug: "building-dynamic-web-applications-with-javascript-and-node-js",
    date: "2023-03-06",
  },
  {
    title: "JavaScript Frameworks: Choosing the Right One for Your Project",
    content:
      "With numerous JavaScript frameworks available today, selecting the right one for your project can be a daunting task. In this article, we'll compare and contrast some of the most popular JavaScript frameworks, including React, Angular, and Vue.js. We'll discuss their key features, performance, community support, and learning curve, helping you make an informed decision. Get ready to discover the perfect JavaScript framework that aligns with your project goals!",
    slug: "javascript-frameworks-choosing-the-right-one-for-your-project",
    date: "2023-01-06",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
