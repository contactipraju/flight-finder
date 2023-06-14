import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from "react";
import { getQuestions } from '../../DataDriven.service';
import DataDrivenForm from './../DataDrivenForm/DataDrivenForm';

import './FormsInStepper.scss';

export default function FormsInStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState<{
		[k: number]: boolean;
	}>({});

	const [questions, setQuestions] = useState([]);
	const [steps, setSteps] = React.useState<string[]>([]);
	const [meta, setMeta] = React.useState<any>({});

	useEffect(() => {
		getQuestions().then((resp) => {
			console.log(resp.data);
			setQuestions(resp.data);
			setMeta(resp.meta);
			const titles: string[] = resp.data.map((item: any) => item['name']);
			setSteps(titles);
		})
	}, []);

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
			? // It's the last step, but not all steps have been completed,
				// find the first step that has been completed
				steps.findIndex((step, i) => !(i in completed))
			: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step: number) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<div id="forms-in-stepper">
			{meta && meta.header ? (<h2> {meta.header} </h2>) : null }

			{meta && meta.desc
			? (
				<div className="desc">
					{meta.desc}
				</div>
			) : null }

			<div className="content">
				<Box sx={{ width: '100%' }}>
					<Stepper nonLinear activeStep={activeStep}>
						{steps.map((label, index) => (
							<Step key={label} completed={completed[index]}>
								<StepButton color="inherit" onClick={handleStep(index)}>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
					<div>
						{allStepsCompleted() ? (
							<React.Fragment>
								<Typography sx={{ mt: 2, mb: 1 }}>
									Yai.. All steps completed. We'll contact you very soon.
								</Typography>
								<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
									<Box sx={{ flex: '1 1 auto' }} />
									<Button onClick={handleReset}>Reset</Button>
								</Box>
							</React.Fragment>
							) : (
							<React.Fragment>
								<Typography component={'div'} sx={{ mt: 2, mb: 1, py: 1 }}>
									{/* Step {activeStep + 1} */}
									{questions && questions.length
									? <DataDrivenForm data={questions[activeStep]}/>
									: <div>Loading...</div>}
								</Typography>
								<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
									<Button
										color="inherit"
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{ mr: 1 }}
									>
										Back
									</Button>
									<Box sx={{ flex: '1 1 auto' }} />
									<Button onClick={handleNext} sx={{ mr: 1 }}>
										Next
									</Button>
									{activeStep !== steps.length &&
										(completed[activeStep] ? (
										<Typography variant="caption" sx={{ display: 'inline-block' }}>
											Step {activeStep + 1} already completed
										</Typography>
										) : (
										<Button onClick={handleComplete}>
											{completedSteps() === totalSteps() - 1
											? 'Finish'
											: 'Complete Step'}
										</Button>
									))}
								</Box>
							</React.Fragment>
						)}
					</div>
				</Box>
			</div>
		</div>
	);
}