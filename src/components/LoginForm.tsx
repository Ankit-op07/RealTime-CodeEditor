import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//Create interface for the data
interface roomInput {
  roomId: string;
  userName: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<roomInput>();

  const createNewRoom = () => {
    const newRoomId = nanoid(12);
    setValue("roomId", newRoomId);
  };

  const onSubmit = (data: roomInput) => {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate(`/dashboard/${data.roomId}`);
  };

  return (
    <Card className="mx-auto max-w-sm bg-slate-300">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Code Sync</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="roomid">Room Id</Label>
              <Input
                id="roomid"
                type="text"
                placeholder="Enter Room Id"
                {...register("roomId", {
                  required: true,
                })}
              />
              {errors.roomId?.type === "required" && (
                <p role="alert" className="text-red-500">
                  RoomId is required
                </p>
              )}
            </div>
            <div className="grid gap-2 mt-3">
              <div className="flex items-center">
                <Label htmlFor="username">Username</Label>
              </div>
              <Input
                id="username"
                type="text"
                required
                placeholder="Enter Your Username"
                {...register("userName", {
                  required: true,
                })}
              />
            </div>

            <Button type="submit" className="w-full mt-5">
              Join
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an invite? Create{" "}
            <span onClick={createNewRoom} className="underline cursor-pointer">
              New Room
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
