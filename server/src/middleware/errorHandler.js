export function notFound(req, res) {
  res
    .status(404)
    .json({
      success: false,
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
}
export function errorHandler(error, req, res, next) {
  console.error(error);
  res
    .status(error.status || 500)
    .json({
      success: false,
      message:
        process.env.NODE_ENV === "production"
          ? "An unexpected server error occurred."
          : error.message || "Server error",
    });
}
