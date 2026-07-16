import { useTransform } from "framer-motion";

export default function useRange(progress, start, end) {

    return useTransform(
        progress,
        [start, end],
        [0, 1],
        {
            clamp: true
        }
    );

}