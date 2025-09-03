import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Shield, RotateCcw, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState("");

  const contactInfo = "nandani@example.com";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter a complete 6-digit code");
      return;
    }
    setIsVerifying(true);
    setError("");
    setTimeout(() => {
      if (otp.length === 6) {
        navigate("/dashboard");
      } else {
        setError("Invalid verification code. Please try again.");
      }
      setIsVerifying(false);
    }, 2000);
  };

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    setError("");
    setOtp("");
    console.log("New OTP:", Math.floor(100000 + Math.random() * 900000).toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/signup" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to signup
          </Link>
        </div>

        <Card className="shadow-xl border-0 bg-card/95 backdrop-blur">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Verify Your Account
            </CardTitle>
            <CardDescription className="text-base text-foreground">
              We've sent a 6-digit verification code to<br />
              <span className="font-medium text-foreground">{contactInfo}</span>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => {
                    setOtp(value);
                    setError("");
                  }}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <div className="text-center">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}
            </div>

            <Button 
              onClick={handleVerify}
              disabled={otp.length !== 6 || isVerifying}
              className="w-full h-11"
            >
              {isVerifying ? (
                <>
                  <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                  Verifying...
                </>
              ) : (
                "Verify & Continue"
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?
              </p>
              
              {canResend ? (
                <Button 
                  variant="ghost" 
                  onClick={handleResend}
                  className="text-primary hover:text-primary/80"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Resend Code
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Resend available in {countdown}s
                </p>
              )}
            </div>

            <div className="pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Check your spam folder if you don't see the email.<br />
                The code expires in 10 minutes.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm">Back to CodeAura</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;