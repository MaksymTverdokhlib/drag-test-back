import { IsNumber, IsString, Min, IsOptional } from 'class-validator';

export class CreateBoxDto {
  @IsNumber()
  x: number;
  @IsNumber()
  y: number;
  @Min(0)
  width: number;
  @Min(0)
  height: number;
  @IsString()
  background: string;
}

export class UpdateBoxParametersDto {
  @IsOptional()
  @Min(0)
  width?: number;

  @IsOptional()
  @Min(0)
  height?: number;

  @IsOptional()
  @IsString()
  background?: string;

  @IsOptional()
  @IsNumber()
  x?: number;

  @IsOptional()
  @IsNumber()
  y?: number;
}

export class UpdateBoxCoordinatesDto {}
