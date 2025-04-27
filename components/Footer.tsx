const Footer = () => {
    return (
        <footer className="mt-8 border-t border-gray-700 bg-gray-800/50 text-gray-300">
            <div className="mx-auto max-w-screen-xl px-3 py-2.5">
                <p className="text-center text-sm md:text-base">
                    CLIMATE{' '}
                    <a target="_blank" className="text-primary-500 hover:underline" href="https://github.com/kk786">
                    TRACKING
                    </a>
                    {' '}
                    <a
                        target="_blank"
                        className="text-primary-500 hover:underline"
                        href="https://github.com/kk786"
                    >
                        HUB
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
