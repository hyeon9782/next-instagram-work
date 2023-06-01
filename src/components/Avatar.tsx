import React from "react";
type Props = {
  image?: string | null;
};
// ? 를 사용하는 이유는 image가 string과 null 뿐만 아니라 undefined일 수도있기 때문에
export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 to-amber-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
      {/* 외부 이미지 링크를 사용할 때 엑스 박스가 나오는 경우가 있다
      이럴 때 referrerPolicy="no-referrer"를 추가해주면 없어진다 */}
    </div>
  );
}
