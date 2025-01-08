import { Passenger } from '@/types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {
  FormSection,
  FormGrid,
  FormField,
  Label,
  FormTitle
} from '@/styles/components/form.styles';

const validationSchema = Yup.object().shape({
  isim: Yup.string()
    .required('İsim alanı zorunludur')
    .min(2, 'İsim en az 2 karakter olmalıdır'),
  soyisim: Yup.string()
    .required('Soyisim alanı zorunludur')
    .min(2, 'Soyisim en az 2 karakter olmalıdır'),
  email: Yup.string()
    .required('E-posta alanı zorunludur')
    .email('Geçerli bir e-posta adresi giriniz'),
  telefon: Yup.string()
    .required('Telefon alanı zorunludur')
    .matches(/^5[0-9]{9}$/, 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)'),
  cinsiyet: Yup.string()
    .required('Cinsiyet seçimi zorunludur'),
  dogumTarihi: Yup.date()
    .required('Doğum tarihi zorunludur')
    .max(new Date(Date.now() - 12 * 365 * 24 * 60 * 60 * 1000), 'Yetişkin yolcu için yaş sınırı 12+ olmalıdır')
});

const StyledField = styled(Field)`
  padding: 12px 16px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f9fa;
  transition: all 0.2s ease-in-out;
  color: #495057;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    background-color: #fff;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &[type="date"] {
    color: #495057;
  }

  &[as="select"] {
    color: #495057;
    
    option {
      color: #495057;
    }
  }
`;

const StyledErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

interface PassengerFormProps {
  passenger: Passenger;
  index: number;
  onChange: (index: number, values: Passenger) => void;
  onValidationChange: (index: number, isValid: boolean) => void;
}

const PassengerForm = ({ passenger, index, onChange, onValidationChange }: PassengerFormProps) => {
  return (
    <FormSection>
      <FormTitle>{`${index + 1}. Yolcu`}</FormTitle>
      <Formik
        initialValues={passenger}
        validationSchema={validationSchema}
        onSubmit={() => {}}
        validateOnChange={true}
        validateOnBlur={true}
        validate={(values) => {
          try {
            validationSchema.validateSync(values);
            onValidationChange(index, true);
            return {};
          } catch {
            onValidationChange(index, false);
            return {};
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FormGrid>
              <FormField>
                <Label htmlFor={`isim-${index}`}>İsim</Label>
                <StyledField
                  id={`isim-${index}`}
                  name="isim"
                  placeholder="Adınızı giriniz"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, isim: e.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.isim && touched.isim && (
                  <StyledErrorMessage>{errors.isim}</StyledErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label htmlFor={`soyisim-${index}`}>Soyisim</Label>
                <StyledField
                  id={`soyisim-${index}`}
                  name="soyisim"
                  placeholder="Soyadınızı giriniz"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, soyisim: e.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.soyisim && touched.soyisim && (
                  <StyledErrorMessage>{errors.soyisim}</StyledErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label htmlFor={`email-${index}`}>E-posta</Label>
                <StyledField
                  id={`email-${index}`}
                  name="email"
                  type="email"
                  placeholder="E-posta adresinizi giriniz"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, email: e.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <StyledErrorMessage>{errors.email}</StyledErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label htmlFor={`telefon-${index}`}>Telefon</Label>
                <StyledField
                  id={`telefon-${index}`}
                  name="telefon"
                  placeholder="5XX XXX XX XX"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, telefon: e.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.telefon && touched.telefon && (
                  <StyledErrorMessage>{errors.telefon}</StyledErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label htmlFor={`cinsiyet-${index}`}>Cinsiyet</Label>
                <StyledField
                  as="select"
                  id={`cinsiyet-${index}`}
                  name="cinsiyet"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, cinsiyet: e.target.value });
                  }}
                  onBlur={handleBlur}
                >
                  <option value="">Seçiniz</option>
                  <option value="erkek">Erkek</option>
                  <option value="kadın">Kadın</option>
                  <option value="diğer">Diğer</option>
                </StyledField>
                {errors.cinsiyet && touched.cinsiyet && (
                  <StyledErrorMessage>{errors.cinsiyet}</StyledErrorMessage>
                )}
              </FormField>

              <FormField>
                <Label htmlFor={`dogumTarihi-${index}`}>Doğum Tarihi</Label>
                <StyledField
                  id={`dogumTarihi-${index}`}
                  name="dogumTarihi"
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    if (window.resetInactivityTimer) {
                      window.resetInactivityTimer();
                    }
                    onChange(index, { ...values, dogumTarihi: e.target.value });
                  }}
                  onBlur={handleBlur}
                />
                {errors.dogumTarihi && touched.dogumTarihi && (
                  <StyledErrorMessage>{errors.dogumTarihi}</StyledErrorMessage>
                )}
              </FormField>
            </FormGrid>
          </Form>
        )}
      </Formik>
    </FormSection>
  );
};

export default PassengerForm;