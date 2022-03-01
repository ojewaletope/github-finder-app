import { useContext } from "react";
import { AlertContext } from "../../context";

export const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <>
      {alert !== null && (
        <div className="flex flex-col bg-error w-max px-3 rounded-tr-md mb-2">
          {alert?.type === "error" && (
            <strong className="text-red-500 mb-1">Error</strong>
          )}
          <p>{alert?.message}</p>
        </div>
      )}
    </>
  );
};
