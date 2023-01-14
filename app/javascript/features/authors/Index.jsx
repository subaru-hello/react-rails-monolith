import React, { useState } from "react";
import { useAuthor } from "./hooks/useAuthor";

const Spinner = () => <div>Loading...</div>;
const Error = () => <div>404 Error</div>;

export function Author({ id = 1 }) {
  const { author, isLoading, isError } = useAuthor(id);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <>
      <div>作成者{author.name}さん</div>
    </>
  );
}
