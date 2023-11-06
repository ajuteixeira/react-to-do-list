export default function Button(props) {
  return (
    <button
      className={`
    ${
      props.color === "purple" &&
      "text-[#f5f5f5] bg-[#7e459b] hover:bg-[#713d8b]"
    }
    ${
      props.color === "gray" &&
      "text-[#f5f5f5] bg-[#b5b6f2] hover:bg-[#b0b1ec] hover:text-[#f5f5f5]"
    }
    ${
      props.type === "default" &&
      "px-4 py-3 w-full text-sm font-bold leading-5  rounded"
    }
    `}
    >
      {props.title || props.children}
    </button>
  );
}
