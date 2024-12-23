import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import React from "react";
import commonStyles from "../commonStyles";
import user01 from "../assets/userImages/user_01.png";
import user02 from "../assets/userImages/user_02.png";
import user03 from "../assets/userImages/user_03.png";
import user04 from "../assets/userImages/user_04.png";
import user05 from "../assets/userImages/user_05.png";
import user06 from "../assets/userImages/user_06.png";
import user07 from "../assets/userImages/user_07.png";
import user08 from "../assets/userImages/user_08.png";
import user09 from "../assets/userImages/user_09.png";
import user10 from "../assets/userImages/user_10.png";
import user11 from "../assets/userImages/user_11.png";
import user12 from "../assets/userImages/user_12.png";
import user13 from "../assets/userImages/user_13.png";
import user14 from "../assets/userImages/user_14.png";
import user15 from "../assets/userImages/user_15.png";
import user16 from "../assets/userImages/user_16.png";
import user17 from "../assets/userImages/user_17.png";
import user18 from "../assets/userImages/user_18.png";
import user19 from "../assets/userImages/user_19.png";
import user20 from "../assets/userImages/user_20.png";

function ChatList() {
    const users = [
        {
            image: user01,
            message:
                "Hello there! Just wanted to drop by and share some exciting news about my day.",
            name: "Alice Wanderlust",
        },
        {
            image: user02,
            message:
                "Today has been such an amazing experience. I got to learn something new and interesting!",
            name: "Bob The Builder",
        },
        {
            image: user03,
            message:
                "It's always refreshing to take a step back and enjoy the little things in life, don't you agree?",
            name: "Charlie Chef",
        },
        {
            image: user04,
            message:
                "Had a great time catching up with old friends and reminiscing about the good old days.",
            name: "Daisy Dreamer",
        },
        {
            image: user05,
            message:
                "Work has been hectic lately, but I managed to complete a challenging project today!",
            name: "Eddie Explorer",
        },
        {
            image: user06,
            message:
                "I'm looking forward to the weekend. Planning a little trip to relax and unwind.",
            name: "Fiona Firefly",
        },
        {
            image: user07,
            message:
                "Have you ever thought about how fascinating technology has become over the years?",
            name: "George Galaxy",
        },
        {
            image: user08,
            message:
                "Just finished reading an incredible book. It had such a profound impact on me!",
            name: "Hannah Hiker",
        },
        {
            image: user09,
            message:
                "Spent some quality time with family today. It's moments like these that truly matter.",
            name: "Ivy Innovator",
        },
        {
            image: user10,
            message:
                "Cooked a new recipe for dinner tonight. It turned out to be a hit with everyone!",
            name: "Jack Journeys",
        },
        {
            image: user11,
            message:
                "Sometimes, life surprises you in the best ways possible. Today was one of those days.",
            name: "Katie Kitten",
        },
        {
            image: user12,
            message:
                "I started a new hobby recently, and it's been so rewarding to see my progress.",
            name: "Leo Lighthouse",
        },
        {
            image: user13,
            message:
                "Nature walks are so peaceful. I feel recharged after exploring the nearby trails.",
            name: "Maggie Marvel",
        },
        {
            image: user14,
            message:
                "I learned something new about a topic I was always curious about. Knowledge is power!",
            name: "Nathan Navigator",
        },
        {
            image: user15,
            message:
                "It's amazing how a little act of kindness can brighten someone's day, including your own.",
            name: "Olivia Oasis",
        },
        {
            image: user16,
            message:
                "I watched a movie that left me inspired to chase my dreams with renewed passion.",
            name: "Peter Pioneer",
        },
        {
            image: user17,
            message:
                "Trying to stick to a healthier routine. It's challenging but definitely worth it!",
            name: "Quincy Quest",
        },
        {
            image: user18,
            message:
                "My pet did the cutest thing today. Animals truly bring joy to our lives.",
            name: "Ruby Rainfall",
        },
        {
            image: user19,
            message:
                "Sometimes, all you need is a good cup of coffee and some peaceful moments.",
            name: "Sam Sunbeam",
        },
        {
            image: user20,
            message:
                "I'm grateful for the wonderful people in my life who support me through thick and thin.",
            name: "Tina Trailblazer",
        },
    ];

    return (
        <div className={`h-full w-1/4 cursor-default flex flex-col`}>
            {/* Header */}
            <div
                className={`${commonStyles.borderBottom} px-2 py-5 flex flex-row items-center justify-between`}
            >
                <div className={`flex flex-row items-center gap-4`}>
                    <h3 className="text-black dark:text-white font-medium text-lg">
                        Active Conversations
                    </h3>
                    <span
                        className={`${commonStyles.inputBackground} rounded-lg px-2 py-2 text-xs`}
                    >
                        14
                    </span>
                </div>

                {/* <button className={`${commonStyles.inputBackground} rounded-md p-2 text-sm`}>
                    <Plus size={20} weight="regular" />
                </button> */}
            </div>

            {/* Search Input */}
            <div className={`px-2 py-4 relative group`}>
                <input
                    type="text"
                    name=""
                    id=""
                    className={`${commonStyles.inputBackground} w-full h-10 rounded-full outline-none text-sm pl-4 pr-11 border-2 border-transparent group-focus-within:border-darkCyan tracking-wide`}
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-8 group-focus-within:text-darkCyan">
                    <MagnifyingGlass size={24} weight="regular" />
                </span>
            </div>

            {/* Users List - Chat List */}
            <div className={`h-full w-full overflow-scroll no-scrollbar py-2`}>
                {users.map((obj, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-row items-center gap-4 cursor-pointer hover:bg-extraLightGray dark:hover:bg-gunmetalGray px-2 py-2 rounded-md w-full`}
                        >
                            <div className="relative min-w-12 max-w-12">
                                <img
                                    src={obj.image}
                                    alt="Profile Image"
                                    className="h-12 w-12 object-cover object-center"
                                />
                                <span className="absolute bottom-0 right-0 bg-green-400 border border-white h-3 w-3 rounded-full"></span>
                            </div>


                            <div
                                className={`flex flex-col justify-center w-full`}
                            >
                                <span className="text-black dark:text-white text-sm">
                                    {obj.name}
                                </span>
                                <p className="text-xs text-nowrap overflow-hidden text-ellipsis max-w-[70%]">
                                    {obj.message}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatList;
