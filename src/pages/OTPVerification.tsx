import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length !== 6) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("OTP verified:", otp);
      setIsLoading(false);
      // Redirect to dashboard or next step
    }, 2000);
  };

  const handleResend = () => {
    console.log("Resending OTP...");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">CodeAura</span>
          </Link>
        </div>

        <Card className="border-editor-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Verify Your Email</CardTitle>
            <p className="text-muted-foreground">
              We've sent a 6-digit verification code to your email address
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="text-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <Button 
                onClick={handleVerify}
                disabled={otp.length !== 6 || isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? "Verifying..." : "Verify Email"}
              </Button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?
              </p>
              <Button 
                variant="outline" 
                onClick={handleResend}
                className="w-full"
              >
                Resend Code
              </Button>
            </div>

            <div className="text-center">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OTPVerification;