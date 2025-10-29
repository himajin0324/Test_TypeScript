import React, { useState } from "react";
//表示⇔非表示を切り替えるボタン
//引数の型定義
type AccordionProps = {
  label?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  labelSize?: string | number;
};

export const Accordion: React.FC<AccordionProps> = ({ label = "表示する", children, defaultOpen = false, labelSize = "16px", }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <span>
      <button style={{ display: "inline-block", fontSize: labelSize}} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "非表示にする" : label}
      </button>

      {isOpen && (
        <div style={{ marginTop: "8px", paddingLeft: "8px" }}>
            {children}
        </div>
      )}
    </span>
  );
};
