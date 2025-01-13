import React from 'react';
import styled from 'styled-components';

const COMPANY_COLOR = '#F28B04';

interface WrapperProps {
  children: React.ReactNode;
}
interface BoxProps {
  children: React.ReactNode;
}
interface ButtonsBoxProps {
  children: React.ReactNode;
}
interface StyledTableProps {
  children: React.ReactNode;
}
interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}
interface TRBodyProps extends React.HTMLAttributes<HTMLTableRowElement> {
  isEven: boolean;
}

// type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Wrapper = styled.div.attrs({
  className:
    'vh-100 bg-light-gray flex flex-column justify-center items-center w-100 h-100',
})<WrapperProps>``;

export const Box = styled.div.attrs({
  className:
    'flex flex-column justify-center items-center pa4 br3 shadow-3 bg-white w-90 w-50-m w-30-l',
})<BoxProps>``;

export const ButtonsBox = styled.div.attrs({
  className: 'flex justify-center items-center pa4 w-90 w-50-m w-30-l',
})<ButtonsBoxProps>``;

export const Buttons = styled.button.attrs<ButtonsProps>(
  ({ isDisabled }: ButtonsProps) => ({
    className: `mh3 pa2 ph4 br3 grow pointer ba b--black-20 ${isDisabled ? 'o-50' : ''}`,
    style: {
      backgroundColor: isDisabled ? 'gray' : COMPANY_COLOR,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    },
    disabled: isDisabled,
  })
)<ButtonsProps>``;

export const Input = styled.input.attrs({
  className: 'tc pa2 input-reset ba b--black-20 br2 mb3 mt3 w-100',
})``;

export const Label = styled.label.attrs({
  className: 'tc input-reset br2  w-100',
})``;

export const StyledH1 = styled.h1.attrs({
  className: 'tc pa2 input-reset br2  w-100',
})``;

export const StyledH2 = styled.h2.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
})``;

export const StyledHighlight = styled.span.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
  style: {
    color: COMPANY_COLOR,
  },
})``;

export const StyledTable = styled.table.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100 striped',
})<StyledTableProps>``;

export const StyledTableHead = styled.thead.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
})<StyledTableProps>``;

export const StyledTRHead = styled.tr.attrs({
  className: 'striped--even bg-light-gray',
})<StyledTableProps>``;

export const StyledTH = styled.th.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
})<StyledTableProps>``;

export const StyledTableBody = styled.tbody.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
})<StyledTableProps>``;

export const StyledTRBody = styled.tr.attrs<TRBodyProps>(
  ({ isEven }: TRBodyProps) => ({
    className: `striped--even ${isEven ? 'bg-light-gray' : ''}`,
  })
)<StyledTableProps>``;

export const StyledTD = styled.td.attrs({
  className: 'tc pa2 input-reset br2 mb3 w-100',
})<StyledTableProps>``;
