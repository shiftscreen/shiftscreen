import React from 'react';
import { useField, useFormikContext } from 'formik';
import Reaptcha from 'reaptcha';
import { Api } from 'constants/index';

interface Props {
  name: string;
}

const ReCaptchaInput: React.FC<Props> = (props) => {
  const [{ name, value, onChange }] = useField(props);
  const { isSubmitting } = useFormikContext();
  const ref = React.createRef<Reaptcha>();

  const handleVerify = (value: string) => (
    onChange({
      target: {
        name,
        value,
      }
    })
  );

  React.useEffect(() => {
    if (ref.current && value) {
      ref.current.reset();
    }
  }, [isSubmitting]);

  return (
    <Reaptcha
      ref={ref}
      sitekey={Api.recaptchaKey}
      onVerify={handleVerify}
    />
  );
};

export default ReCaptchaInput;
