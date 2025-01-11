'use client'
import { ChevronRight, Clock, Dot, Group, Star, Users, Utensils } from 'lucide-react'
import React from 'react'

const page = () => {
    const colorSchemes = [
        { base: '#FF5733', hover: '#FF6F47', border: '#CC4626' }, // Orange-Red
        { base: '#33A8FF', hover: '#5DBFFF', border: '#1F87CC' }, // Sky Blue
        { base: '#28B463', hover: '#3CCF74', border: '#219352' }, // Lime Green
        { base: '#8E44AD', hover: '#A569BD', border: '#6C3483' }, // Deep Purple
        { base: '#FFC300', hover: '#FFD233', border: '#CC9C00' }, // Bright Yellow
        { base: '#FF33CC', hover: '#FF66D9', border: '#CC299E' }, // Magenta
        { base: '#00FFFF', hover: '#33FFFF', border: '#00CCCC' }, // Cyan
        { base: '#FF4500', hover: '#FF6347', border: '#CC3700' }, // Burnt Orange
        { base: '#2E86C1', hover: '#5DADE2', border: '#1F618D' }, // Steel Blue
        { base: '#2ECC71', hover: '#58D68D', border: '#28A745' }, // Emerald Green
    ];

    const pizzaIngredients = [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Oregano",
        "Garlic",
        "Olive oil",
        "Fresh basil leaves",
        "Oregano",
        "Garlic",
        "Salt",
        "Pepper",
    ];
    const pizzaRecipe = [
        {
            name: "Prepare the dough",
            description: "Start by activating the yeast in warm water to ensure it’s active and ready. Combine the yeast mixture with flour, olive oil, sugar, and salt. Mix until a dough forms, then knead for 8-10 minutes until smooth and elastic. Place the dough in an oiled bowl, cover with a damp cloth, and let it rise in a warm place for 1-2 hours until it doubles in size."
        },
        {
            name: "Prepare the sauce",
            description: "In a small saucepan, heat olive oil over medium heat. Sauté minced garlic until fragrant. Add canned tomato sauce, dried oregano, dried basil, salt, and pepper. Simmer for 10-15 minutes, stirring occasionally, until the sauce thickens and develops flavor. Let it cool before spreading on the dough."
        },
        {
            name: "Bake the pizza",
            description: "Carefully transfer the parchment paper with the assembled pizza onto the preheated pizza stone or baking sheet. Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly. Rotate the pizza halfway through baking for even cooking."
        },
        {
            name: "Bake the pizza",
            description: "Carefully transfer the parchment paper with the assembled pizza onto the preheated pizza stone or baking sheet. Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly. Rotate the pizza halfway through baking for even cooking."
        },

    ];


    return (
        <div className='bg-black md:min-h-screen w-full text-white flex flex-col overflow-hidden gap-6 md:gap-0 md:flex-row px-4 md:px-10 py-16'>
            <div className='h-full md:min-w-[620px] flex flex-col justify-center gap-3 '>
                <h1 className='text-5xl md:text-6xl font-bold '>Perfect Pizza Recipe</h1>
                <p className='my-2  md:text-lg font-medium'>Master the art of the  making authentic Italian pizza right in your kitchen</p>
                <div className='flex gap-6 flex-col md:flex-row items-center '>
                    <div className='flex items-center gap-2 text-base'>
                        <Clock className='text-[#ff0]' size={18} />
                        <p className='text-[#c0c0c0]'>Prep Time : </p>
                        <p className='text-white'>30 mins</p>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        <Users className='text-[#ff0]' size={18} />
                        <p className='text-[#c0c0c0]'>Serves : </p>
                        <p className='text-white'>4</p>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        <Star className='text-[#ff0]' size={18} />
                        <p className='text-[#c0c0c0]'>Difficulty : </p>
                        <p className='text-white'>medium</p>
                    </div>
                </div>
                <div className='md:max-w-[600px] border border-[#ff0] rounded-lg p-5 my-5 overflow-auto'>
                    <p className='text-xl flex items-center gap-3'><Utensils className='text-[#ff0]' />  Ingredients : </p>
                    <div
                        className="mt-8 grid gap-2 p-4"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))'
                        }}
                    >
                        {pizzaIngredients.map((item, index) => {
                            const colorScheme = colorSchemes[index % colorSchemes.length];
                            return (
                                <div
                                    style={{
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: colorScheme.base
                                    }} className={`bg-opacity-70 text-[#f7e6e6] bg-blend-saturation backdrop-blur-2xl p-2 rounded-lg shadow-lg flex items-center`} key={index}> <Dot /> {item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="h-full grid md:grid-cols-2 gap-6 p-6 md:p-0 overflow-auto bg-black">
                {pizzaRecipe.map((item, index) => {
                    const colorScheme = colorSchemes[index % colorSchemes.length];

                    return (
                        <div
                            key={index}
                            className="relative group rounded-xl shadow-xl p-6 backdrop-blur-lg transition-all duration-300"
                            style={{
                                backgroundColor: '#18181B',
                                borderWidth: '1px',
                                borderColor: '#3F3F46',
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <span
                                        className="flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold text-sm"
                                        style={{ backgroundColor: colorScheme.base }}
                                    >
                                        {index + 1}
                                    </span>
                                    <h2
                                        className="text-xl font-bold text-white transition-colors duration-300"
                                        style={{
                                            '--hover-color': colorScheme.hover,
                                        }}
                                    >
                                        {item.name}
                                    </h2>
                                </div>
                                <ChevronRight
                                    className="w-5 h-5 transition-colors duration-300"
                                    style={{
                                        color: '#52525B',
                                        '--hover-color': colorScheme.hover,
                                    }}
                                />
                            </div>

                            <p className="mt-4 leading-relaxed" style={{ color: '#D4D4D8' }}>
                                {item.description}
                            </p>

                            <div
                                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: colorScheme.base
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default page
