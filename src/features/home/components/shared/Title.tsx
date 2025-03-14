import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className="text-4xl font-bold text-center mb-5">
            {children}
        </h1>
    );
};

export default Title;