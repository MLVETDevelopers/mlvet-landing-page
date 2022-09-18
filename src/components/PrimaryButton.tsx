interface ButtonProps {
    text: string;
}

const PrimaryButton = ({text}: ButtonProps) => {
    return (
        <button className="bg-yellow-500 text-grey-700 align-middle text-center px-12 h-12 rounded flex-none">
            {text}
        </button>
    );
}

export default PrimaryButton;