import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
    const loginmodal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // TODO ADD REGISTER AND LOGIN

            registerModal.onClose();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(event) => setUserName(event.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    );
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
};

export default RegisterModal;