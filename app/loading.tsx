// app/dashboard/loading.tsx

const Loading = () => {
    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
        </div>
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  };
  
  export default Loading;
  