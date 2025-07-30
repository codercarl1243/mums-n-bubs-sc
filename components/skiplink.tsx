

export default function SkipLink() {

    return (
        <a
            href="#main-content"
            className="absolute left-4 top-[-4] z-50 -translate-y-full focus:translate-y-4 transition-transform bg-white text-black px-4 py-2 rounded shadow-md hover:bg-primary-200 focus:outline-dashed focus:outline-primary-700 focus:outline-offset-4 focus:ring-2 focus:ring-primary-700"
        >
            Skip to main content
        </a>
    );
}