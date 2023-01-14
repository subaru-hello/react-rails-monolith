import React from "react";
import { Author } from "../../authors/Index";

export function BookItem(props) {
  return (
    <>
      <div>Title: {props.title}</div>
      <div>内容: {props.content}</div>
    </>
  );
}
