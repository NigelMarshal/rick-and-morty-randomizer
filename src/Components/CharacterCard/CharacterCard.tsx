import React from 'react';

type Props = {
    name: string;
    image: string;
};

const CharacterCard = ({ name, image }: Props) => (

    <div className="py-10 wrapper bg-gray-100 antialiased text-gray-900 rounded">
        <div>
            <img src={image} alt={`${name} image`} className="mx-auto object-cover object-center rounded-lg shadow-md" />
            <div className="relative px-4 mt-10  ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className=" text-xl font-semibold uppercase leading-tight"> {name}</h4>
                </div>
            </div>
        </div>
    </div>
);

export default CharacterCard;
