import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-accent mb-4">Oops!</h1>
            <p className="text-subtext text-lg mb-6">Something went wrong. Please refresh the page or try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-accent text-black px-6 py-2 rounded-full font-bold shadow-neon hover:bg-white hover:text-accent transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
