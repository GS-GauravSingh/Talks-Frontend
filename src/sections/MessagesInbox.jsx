import React, { useState } from "react";
import commonStyles from "../commonStyles";
import user01 from "../assets/userImages/user_01.png";
import {
    DotsThree,
    Gif,
    LinkSimple,
    Microphone,
    PaperPlaneTilt,
    PhoneCall,
    Smiley,
    VideoCamera,
} from "@phosphor-icons/react";
import {
    EmojiPicker,
    GifPicker,
    MessageSeparator,
    TextMessage,
    TypingIndicator,
} from "../components";
import Profile from "./Profile";

function MessagesInbox() {
    const [showGifPicker, setShowGifPicker] = useState(false);
    const [showProfileInfo, setShowProfileInfo] = useState(false);

    function handleToggleShowGifPicker(event) {
        event.preventDefault();
        setShowGifPicker((prev) => !prev);
    }

    function handleToggleShowProfileInfo(event) {
        event.preventDefault();
        setShowProfileInfo((prev) => !prev);
    }

    return (
        <>
            <div
                className={`${commonStyles.borderLeft} h-full w-full ${
                    showProfileInfo && "!w-1/2"
                } flex flex-col`}
            >
                {/* Header */}
                <div
                    className={`flex flex-row items-center justify-between px-2 py-4 ${commonStyles.borderBottom}`}
                >
                    {/* Header - Left */}
                    <div className="flex items-center gap-4">
                        <button
                            className="relative min-w-12 max-w-12"
                            onClick={handleToggleShowProfileInfo}
                        >
                            <img
                                src={user01}
                                alt="Profile Image"
                                className="h-full w-full object-cover object-center"
                            />
                            <span className="absolute bottom-0 right-0 bg-green-400 border border-white h-3 w-3 rounded-full"></span>
                        </button>

                        <div className="flex flex-col cursor-default">
                            <h3 className="text-black dark:text-white">
                                Alice Wanderlust
                            </h3>
                            <p className="text-xs">Reply to message(s)</p>
                        </div>
                    </div>

                    {/* Header - Right */}
                    <div className="flex flex-row items-center gap-8">
                        <button className="hover:text-darkCyan">
                            <VideoCamera size={20} weight="regular" />
                        </button>

                        <button className="hover:text-darkCyan">
                            <PhoneCall size={20} weight="regular" />
                        </button>

                        <button className="hover:text-darkCyan">
                            <DotsThree size={22} weight="regular" />
                        </button>
                    </div>
                </div>

                {/* Main - Messages or Chats */}
                <div
                    className={`flex-grow px-2 py-2 overflow-scroll no-scrollbar space-y-6`}
                >
                    <MessageSeparator timestamp="Today" />

                    <TextMessage
                        type="incoming"
                        author="Alice Wanderlust"
                        content="Hey! Got any plans for the weekend?"
                        timestamp="2:00 pm"
                    />

                    <TextMessage
                        type="outgoing"
                        author=""
                        content="Not much. Thinking of binge-watching that new series on Netflix. You?"
                        timestamp="2:01 pm"
                        read_receipt="delivered"
                    />

                    <TextMessage
                        type="incoming"
                        author="Alice Wanderlust"
                        content="Sounds relaxing! I’m going hiking with some friends. We’re heading to Blue Ridge Mountain."
                        timestamp="2:01 pm"
                    />

                    <TextMessage
                        type="outgoing"
                        author=""
                        content="Oh, nice! You should check out this guide for hiking essentials: https://phosphoricons.com/."
                        timestamp="2:02 pm"
                        read_receipt="delivered"
                    />

                    <TextMessage
                        type="incoming"
                        author="Alice Wanderlust"
                        content="Thanks! I’ll definitely check it out. Link: https://phosphoricons.com/."
                        timestamp="2:02 pm"
                    />

                    <TypingIndicator />
                </div>

                {/* Footer - Send Message and other inputs */}
                <div className="w-full flex flex-col gap-2 px-2 py-2">
                    <div className={`flex items-center gap-4`}>
                        {/* Send Message Input */}
                        <div className="w-full relative">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Type you message here..."
                                className={`w-full ${commonStyles.inputBackground} h-10 rounded-full outline-none border border-transparent focus-within:border-darkCyan text-black dark:text-white text-xs pl-4 pr-32 tracking-wide`}
                            />

                            <div
                                className={`absolute top-1/2 right-4 -translate-y-1/2 flex flex-row items-center gap-2`}
                            >
                                <span className="flex items-center hover:text-darkCyan cursor-pointer">
                                    <Microphone size={20} weight="regular" />
                                </span>

                                <button className="flex items-center hover:text-darkCyan cursor-pointer" onClick={handleToggleShowGifPicker}>
                                    <Gif size={20} weight="regular" />
                                </button>

                                <span className="flex items-center hover:text-darkCyan cursor-pointer">
                                    <LinkSimple size={20} weight="regular" />
                                </span>

                                <EmojiPicker />
                            </div>
                        </div>

                        {/* Send Message Button */}
                        <button className="flex items-center p-2 rounded-full bg-darkCyan text-white border border-darkCyan hover:opacity-90">
                            <PaperPlaneTilt size={20} weight="regular" />
                        </button>
                    </div>


                    {/* Gif Picker Component */}
                    {
                        showGifPicker && <GifPicker />
                    }
                </div>
            </div>

            {showProfileInfo && (
                <Profile
                    handleToggleShowProfileInfo={handleToggleShowProfileInfo}
                />
            )}
        </>
    );
}

export default MessagesInbox;
