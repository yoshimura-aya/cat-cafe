import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    description: '猫の名前',
    type: String,
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: '猫の年齢',
    minimum: 1,
    default: 1,
    type: Number,
  })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    description: '推定年齢か',
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  readonly isEstimationAge?: boolean;

  @ApiProperty({
    description: '猫の品種',
    type: String,
  })
  @IsString()
  readonly breed: string;
}
