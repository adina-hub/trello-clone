import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json()

  //communicate with openAI GPT
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    max_tokens: 200,
    stream: false,
    messages: [
      {
        role: "system",
        content: "When responding, welcome the user always as Adina and say Welcome."
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, In progress and Done, then tell the user to have a productive day. Here is the data: 
        ${JSON.stringify(todos)}`
      }
    ]
  })

  const {data} = response

  console.log(data.choices[0].message)

  return NextResponse.json(data.choices[0].message)
}