import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#4A7FFF] to-[#3A6FEF] flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564429541910-321de2b3af95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Белый голубь"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <AlertCircle className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold text-white">Упс! Что-то пошло не так</h1>
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-6">
                <p className="text-lg text-gray-600 text-center">
                  Похоже, наш голубь немного сбился с курса. Не волнуйтесь, мы уже работаем над решением проблемы.
                </p>

                {this.state.error && (
                  <details className="bg-gray-50 rounded-xl p-4 text-sm">
                    <summary className="cursor-pointer font-medium text-gray-700 hover:text-[#4A7FFF] transition-colors">
                      Технические подробности
                    </summary>
                    <pre className="mt-4 text-xs text-gray-600 overflow-x-auto whitespace-pre-wrap break-words">
                      {this.state.error.toString()}
                    </pre>
                  </details>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={this.handleReload}
                    className="flex-1 bg-[#4A7FFF] hover:bg-[#3A6FEF] text-white"
                    size="lg"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Перезагрузить страницу
                  </Button>
                  <Button
                    onClick={this.handleReset}
                    variant="outline"
                    className="flex-1 border-2 border-[#4A7FFF] text-[#4A7FFF] hover:bg-[#4A7FFF] hover:text-white"
                    size="lg"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Попробовать снова
                  </Button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Если проблема повторяется, пожалуйста, свяжитесь с нами:{' '}
                    <a href="mailto:support@dovechat.ru" className="text-[#4A7FFF] hover:underline font-medium">
                      support@dovechat.ru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
