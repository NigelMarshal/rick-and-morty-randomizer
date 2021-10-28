import React from 'react';

type Props = {
    name: string;
    image: string;
    species: string
    type: string
    gender: string
};

const CharacterCard = ({ name, image, species, type, gender }: Props) => (

    <div className="py-10 wrapper bg-gray-100 antialiased text-gray-900 rounded">
        <div>
            <img src={image} alt={`${name} image`} className="mx-auto object-cover object-center rounded-lg shadow-md" />
            <div className="relative px-4 mt-10  ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold leading-tight">{name}</h4>
                    <p className="text-gray-600 font-bold">Species: {species}</p>
                    {(!type) ? null : <p className="text-gray-600 font-bold">Type: {type}</p>}
                    <p className="text-gray-600 font-bold">Gender: {gender}</p>
                </div>
            </div>
        </div>
    </div>
);

export default CharacterCard;
