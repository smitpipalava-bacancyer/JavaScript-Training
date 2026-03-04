type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

type Product = {
  id: number;
  name: string;
  price: number;
};

function isSuccess<T>(
  response: ApiResponse<T>
): response is { status: "success"; data: T } {
  return response.status === "success";
}