import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  url: string;
  Icon: IconType;
}

function MenuItem({ title, url, Icon }: Props) {
  return (
    <Link href={url} className="uppercase  hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:block py-2 text-sm">{title}</p>
    </Link>
  );
}

export default MenuItem;
