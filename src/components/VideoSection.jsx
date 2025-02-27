function VideoSection({ videoUrl, title }) {
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <iframe
                className="mt-4 w-full max-w-3xl aspect-video mx-auto rounded-lg shadow-lg p-10"
                src={videoUrl}
                title={title}
                allowFullScreen
                loading="lazy"
                aria-label={title}
            ></iframe>
        </div>
    );
}

export default VideoSection;
