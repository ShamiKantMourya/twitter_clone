import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginmodal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // TODO ADD LOGIN

            loginmodal.onClose();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [loginmodal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(event) => event.target.value}
                value={password}
                disabled={isLoading}
            />
        </div>
    );
    return (
        <Modal
            disabled={isLoading}
            isOpen={loginmodal.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={loginmodal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
};

export default LoginModal;