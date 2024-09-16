const Loading = ({ loading }) =>
  loading && (
    <div
      className="flex w-full items-center text-yellow-600  justify-center min-h-20
              animate-breath"
    >
      checking...
    </div>
  );

export default Loading;
