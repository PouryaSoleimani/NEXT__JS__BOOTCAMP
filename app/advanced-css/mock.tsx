import {
   BooksIcon,
   ClockIcon,
   HardDrivesIcon,
} from "@phosphor-icons/react";

export type SingleBoxDataType = {
   id: number;
   icon: React.ReactElement;
   title: string;
   description: string;
};

export const boxesData: SingleBoxDataType[] = [
   {
      id: 1,
      icon: (
         <ClockIcon
            size={48}
            weight="fill"
            fill="#214268"
            className="box_content_icon"
         />
      ),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      description:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odit, dolore quos accusantium facilis",
   },
   {
      id: 2,
      icon: (
         <HardDrivesIcon
            size={48}
            weight="fill"
            fill="#214268"
            className="box_content_icon"
         />
      ),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      description:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odit, dolore quos accusantium facilis",
   },
   {
      id: 3,
      icon: (
         <BooksIcon
            size={48}
            weight="fill"
            fill="#214268"
            className="box_content_icon"
         />
      ),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      description:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odit, dolore quos accusantium facilis",
   },
];



