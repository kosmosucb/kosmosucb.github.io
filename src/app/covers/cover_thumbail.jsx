"use client";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Member from "../member";

export default function CoverThumbnail({name, image}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
        <div>
            <Card className="z-0" shadow="sm" isPressable onPress={(onOpen)}>
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="standing next to you"
                    className="lg:w-full object-cover lg:h-[140px]"
                    src={"http://img.youtube.com/vi/"+ image +"/maxresdefault.jpg"}
                    />
                </CardBody>
                <CardFooter className="text-small justify-center text-pretty">
                    <b>{name}</b>
                </CardFooter>
            </Card>
        </div>
        <Modal 
            className="pb-16 pl-8 pt-4" 
            size="5xl" 
            isOpen={isOpen} 
            onOpenChange={onOpenChange} 
            scrollBehavior="inside"
            placement="top-center"
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 mb-3 text-md lg:text-2xl font-semibold">{name}</ModalHeader>
                <ModalBody>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <iframe className="lg:w-[560px] lg:h-[315px]" src={"https://www.youtube.com/embed/"+image} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                    text-align="center" 
                    />
                    <div className="flex flex-col">
                        Dancers:
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                    </div>
                    <div className="flex flex-col">
                        Filmed By:
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                        <br/>
                        Edited By:
                        <Member name="Hoang Ton" handle="@hoon.evday" link="https://www.instagram.com/hoon.evday/" pic="/Hoang.jpg" page="/members/hoang"/>
                    </div>
                    <br/>
                </div>                 
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
    );
}