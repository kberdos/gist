interface TopicBubblesProps {
    topic: string
}
export const TopicBubbles = ({ topic }: TopicBubblesProps) => {
    return (
        <div className="text-center box-border rounded-full opacity-100 w-[150px] px-4 py-2 bg-nord-6">{topic}</div>
    )
}