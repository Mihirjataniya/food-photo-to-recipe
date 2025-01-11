import { NextResponse } from "next/server";
import model from "@/lib/model";


export async function POST(req) {
    try {
        const body = await req.json()
       
        const { labels } = body
        

        const prompt = `Using the provided labels: ${labels}, generate 4-5 concise, and culturally authentic Dish names. The names must correspond to well-known dishes within the cuisine or variations of them. Avoid generic phrases such as "with Vegetable Garnish" or "Recipe." "Make sure the Dish names you are generating should actually exist in the world as Dish". Respond in JSON format as follows: {"recipe_names": ["First Dish Name", "Second Dish Name", "Third Dish Name", "Fourth Dish Name"]}.

`
        const result = await model.generateContent(prompt);
        let recipeNames
        try {
          
            let responseText = result.response.text().trim();
        
            
            responseText = responseText.replace(/^```(?:json)?|```$/g, '').trim();
        
            const cleanedResponse = responseText.replace(/^JSON\s*:/i, '').trim();
        
            const parsedResponse = JSON.parse(cleanedResponse);
            recipeNames = parsedResponse.recipe_names || [];
        } catch (error) {
            return NextResponse.json({
                message: "Could Not Fetch Recipe Names",
                error
            },
                { status: 500 }
            )
        }
        return NextResponse.json({
            messsage: "Recipe names generated",
            recipeNames: recipeNames
        }, { status: 200 })

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            message: "Something went wrong",
            error
        },
            { status: 500 }
        )
    }
}