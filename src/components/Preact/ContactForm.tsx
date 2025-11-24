import { useState, useRef } from 'preact/hooks'
import emailjs from "@emailjs/browser"

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const CheckInRef = useRef<HTMLInputElement>(null)
    const CheckOutRef = useRef<HTMLInputElement>(null)
    const GuestsRef = useRef<HTMLSelectElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current || !CheckInRef.current || !CheckOutRef.current || !GuestsRef.current) return

        const name = NameRef?.current?.value as string;
        const email = EmailRef?.current?.value as string;
        const checkIn = CheckInRef?.current?.value as string;
        const checkOut = CheckOutRef?.current?.value as string;
        const guests = GuestsRef?.current?.value as string;
        const message = MessageRef?.current?.value as string;
        const composedMessage = `Check-in: ${checkIn || "TBD"}\nCheck-out: ${checkOut || "TBD"}\nGuests: ${guests}\n\n${message}`;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: composedMessage,
        }

        try {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                throw new Error('🙄 Invalid Email ID!')
            }

            setisLoading(true)
            const mailRes = await emailjs.send(
                import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
                import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
            );

            if (mailRes.status !== 200) {
                throw new Error("😵 Message not Sent")
            }

            setMailStatus({ status: true, message: "👍 Message Sent!" })
            setisLoading(false)

            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""
            if (CheckInRef.current) CheckInRef.current.value = ""
            if (CheckOutRef.current) CheckOutRef.current.value = ""
            if (GuestsRef.current) GuestsRef.current.value = "2 Adults"
        } catch (error: { message: string } | any) {
            setMailStatus({ status: false, message: error.message })
        } finally {
            setTimeout(() => {
                setMailStatus({ status: false, message: "" })
            }, 3000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="checkin"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Check-in
                <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    ref={CheckInRef}
                />
            </label>
            <label
                htmlFor="checkout"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Check-out
                <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    ref={CheckOutRef}
                />
            </label>
            <label
                htmlFor="guests"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Guests
                <select
                    id="guests"
                    name="guests"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    ref={GuestsRef}
                    defaultValue="2 Adults"
                >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Family Suite (3-4)</option>
                    <option>Residence (5+)</option>
                </select>
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Occasion & requests
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Let us know about celebrations, dietary notes, arrival preferences..."
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Sending</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm