
import model from "@/lib/model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json()
        const { recipeName, servings } = body

        const prompt = `Create a recipe for the dish "${recipeName}" suitable for ${servings} servings. Ensure the recipe is authentic to the cuisine it belongs to, maintaining its traditional taste and preparation style. Provide a detailed list of all ingredients required and step-by-step instructions for cooking. Format the response as JSON in the following structure:

        {
            "ingredients": ["LIST OF ALL INGREDIENTS REQUIRED"],
            "recipeSteps": [
                {
                    "stepName": "NAME OF THE STEP",
                    "stepDescription": "DETAILED DESCRIPTION OF THE STEP"
                }
            ],
            "difficulty": "LEVEL OF DIFFICULTY (easy, medium, or hard)",
            "time": "TIME REQUIRED TO COOK THE RECIPE"
            "description" : "SOME GOOD WORDS OR A FACT ABOUT RECIPE MAXZ 25 WORDS"
        }
        
        Ensure the recipe is accurate, detailed, and easy to follow.`;

        const result = await model.generateContent(prompt);
        let recipe;
        try {
            let responseText = result.response.text().trim();
            responseText = responseText.replace(/^```(?:json)?|```$/g, '').trim();

            const cleanedResponse = responseText.replace(/^JSON\s*:/i, '').trim();

            const parsedResponse = JSON.parse(cleanedResponse);
            recipe = parsedResponse;
        } catch (error) {
            return NextResponse.json({
                message: "Something went wrong",
                error
            },
                { status: 500 }
            )
        }
        return NextResponse.json({
            messsage: "Recipe generated",
            recipe: recipe
        }, { status: 200 })
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong",
            error
        },
            { status: 500 }
        )
    }
}
